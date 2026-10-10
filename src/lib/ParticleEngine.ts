import { DEFAULT_CONFIG, ParticleConfig, VeldrinPath } from './experience';

export interface VeldrinParticle {
  // Current interpolated 3D position
  x: number;
  y: number;
  z: number;

  // Velocity for Verlet spring physics
  vx: number;
  vy: number;
  vz: number;

  // Wave mesh grid coordinates
  ribbonIndex: number;
  strandIndex: number;
  u: number; // 0 to 1 along length of wave
  v: number; // -0.5 to 0.5 across width of ribbon

  // Intermediate cluster target
  clusterX: number;
  clusterY: number;
  clusterZ: number;

  // Target structured coordinates for active path
  targetX: number;
  targetY: number;
  targetZ: number;

  // Particle attributes
  baseSize: number;
  materialType:
    | 'silver_specular'
    | 'silver_light'
    | 'silver_pearl'
    | 'silver_quiet'
    | 'graphite_light'
    | 'graphite_mid'
    | 'graphite_deep'
    | 'charcoal'
    | 'accent_lavender';
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  randomOffset: number;
}

export class ParticleEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: VeldrinParticle[] = [];
  private config: ParticleConfig;

  // Display dimensions & resolution
  private width: number = 0;
  private height: number = 0;
  private dpr: number = 1;

  // Camera & gentle parallax
  private rotX: number = 0;
  private rotY: number = 0;
  private targetRotX: number = 0;
  private targetRotY: number = 0;

  // Reduced motion preference
  private prefersReducedMotion: boolean = false;

  // Lifecycle
  public fps: number = 60;
  private frameCount: number = 0;
  private lastFpsUpdate: number = 0;
  private animFrameId: number | null = null;
  private isDestroyed: boolean = false;

  // STRICT APPROVED VELDRIN PALETTE ONLY
  // Metallic silver & pearl dust suggested through brightness, density, and opacity
  private readonly COLOR_SILVER_SPECULAR = '#fafaff'; // brightest metallic specular highlight
  private readonly COLOR_SILVER_LIGHT    = '#f8f9fa'; // crisp high-contrast silver
  private readonly COLOR_SILVER_PEARL    = '#e9ecef'; // lustrous pearl
  private readonly COLOR_SILVER_QUIET    = '#dee2e6'; // metallic mid-light
  private readonly COLOR_GRAPHITE_LIGHT  = '#ced4da'; // soft silver highlight
  private readonly COLOR_GRAPHITE_MID    = '#adb5bd'; // silver dust body
  private readonly COLOR_GRAPHITE_DEEP   = '#6c757d'; // graphite shadow
  private readonly COLOR_CHARCOAL        = '#495057'; // depth shadow
  private readonly COLOR_ACCENT_LAVENDER = '#e4d9ff'; // rare specular accent tone

  // Undulating 3D Topographical Perspective Wave Grid (Dense, continuous metallic dust)
  private readonly numRibbons = 34;      // Parallel streamlines across depth
  private readonly pointsPerStrand = 62;  // Points along each longitudinal contour

  constructor(canvas: HTMLCanvasElement, customConfig?: Partial<ParticleConfig>) {
    this.canvas = canvas;
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      throw new Error('Canvas 2D context not supported');
    }
    this.ctx = context;
    this.config = { ...DEFAULT_CONFIG, ...customConfig };

    this.checkReducedMotion();
    this.initSize();
    this.initParticles();
    this.bindEvents();
    this.computeStructuredTargets(this.config.activePath);
  }

  private checkReducedMotion() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
  }

  private initSize() {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width || window.innerWidth;
    this.height = rect.height || window.innerHeight;

    this.canvas.width = Math.floor(this.width * this.dpr);
    this.canvas.height = Math.floor(this.height * this.dpr);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(this.dpr, this.dpr);
  }

  public resize() {
    this.initSize();
    this.computeStructuredTargets(this.config.activePath);
  }

  private initParticles() {
    this.particles = [];

    // Construct organized flowing 3D perspective landscape grid (Image 4 style)
    for (let r = 0; r < this.numRibbons; r++) {
      const v = (r / (this.numRibbons - 1)) - 0.5; // -0.5 to 0.5 across grid width / depth

      for (let p = 0; p < this.pointsPerStrand; p++) {
        const u = p / (this.pointsPerStrand - 1); // 0 to 1 along wave stream

        // Strict Veldrin Metallic Dust Distribution:
        // Specular silver (#fafaff), pearl silver (#e9ecef), silver light (#f8f9fa),
        // metallic mid (#dee2e6), graphite (#adb5bd, #ced4da, #6c757d), and subtle lavender (#e4d9ff)
        let materialType: VeldrinParticle['materialType'] = 'silver_pearl';
        const rand = Math.random();

        if (rand < 0.12) {
          materialType = 'silver_specular';
        } else if (rand < 0.35) {
          materialType = 'silver_light';
        } else if (rand < 0.60) {
          materialType = 'silver_pearl';
        } else if (rand < 0.72) {
          materialType = 'silver_quiet';
        } else if (rand < 0.82) {
          materialType = 'graphite_light';
        } else if (rand < 0.90) {
          materialType = 'graphite_mid';
        } else if (rand < 0.95) {
          materialType = 'graphite_deep';
        } else if (rand < 0.97) {
          materialType = 'charcoal';
        } else {
          materialType = 'accent_lavender';
        }

        // Microscopic fine particles (0.55px to 1.25px)
        let baseSize = Math.random() * 0.35 + 0.65;
        if (materialType === 'silver_specular' || materialType === 'accent_lavender') {
          baseSize = Math.random() * 0.45 + 0.95;
        }

        // Initial position along relaxed horizontal wave
        const startX = (u - 0.5) * (this.width * 1.45);
        const startY = (r - (this.numRibbons - 1) / 2) * 22;
        const startZ = v * 520 + (Math.random() - 0.5) * 80;

        // Spatial cluster anchors for intermediate transitions
        const clusterAngle = (u * Math.PI * 4) + r * 0.8;
        const clusterRad = 90 + Math.random() * 120;
        const clusterX = Math.cos(clusterAngle) * clusterRad;
        const clusterY = Math.sin(clusterAngle) * (clusterRad * 0.7) + (v * 40);
        const clusterZ = (Math.random() - 0.5) * 160;

        this.particles.push({
          x: startX,
          y: startY,
          z: startZ,
          vx: 0,
          vy: 0,
          vz: 0,
          ribbonIndex: r,
          strandIndex: 0,
          u,
          v,
          clusterX,
          clusterY,
          clusterZ,
          targetX: 0,
          targetY: 0,
          targetZ: 0,
          baseSize,
          materialType,
          alpha: Math.random() * 0.35 + 0.60,
          twinkleSpeed: Math.random() * 1.3 + 0.7,
          twinkleOffset: Math.random() * Math.PI * 2,
          randomOffset: Math.random() * Math.PI * 2,
        });
      }
    }
  }

  private bindEvents() {
    window.addEventListener('resize', () => this.resize(), { passive: true });

    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', (e) => {
        this.prefersReducedMotion = e.matches;
      });
    }

    // Subtle cursor parallax
    window.addEventListener(
      'mousemove',
      (e: MouseEvent) => {
        if (this.prefersReducedMotion) return;
        const nx = (e.clientX / window.innerWidth) - 0.5;
        const ny = (e.clientY / window.innerHeight) - 0.5;
        this.targetRotY = nx * 0.14;
        this.targetRotX = -ny * 0.09;
      },
      { passive: true }
    );
  }

  /**
   * Computes accurate 3D semantic targets for all 4 Veldrin modes.
   * Study: Correctly oriented, enlarged anatomical brain with rich cortical gyri/sulci,
   *        longitudinal fissure separation, cerebellum, brainstem, and lustrous synaptic hubs.
   */
  public computeStructuredTargets(path: VeldrinPath) {
    const count = this.particles.length;
    const isMobile = this.width < 768;

    // Substantially enlarged scale without overflowing mobile viewport
    const radius = Math.min(this.width, this.height) * (isMobile ? 0.38 : 0.48);

    for (let i = 0; i < count; i++) {
      const p = this.particles[i];
      let tx = 0;
      let ty = 0;
      let tz = 0;

      if (path === 'study') {
        // --- STUDY: Strictly Upright Anatomical Human Brain (Cortex Up, Brainstem Down) ---
        // Orientation in screen coordinates (-Y is UP/Apex, +Y is DOWN/Base/Stem, +Z is Anterior/Front, -Z is Posterior/Back)
        const subIndex = i % 50;
        const hemi = i % 2 === 0 ? 1 : -1; // 1 = Right Hemisphere, -1 = Left Hemisphere
        const fissureGap = isMobile ? 12 : 18; // Central longitudinal fissure dividing hemispheres

        if (subIndex < 6) {
          // 1. BRAINSTEM (Pons & Medulla Oblongata)
          // Strictly descending downwards (+Y) along the central axis towards the cervical column
          const stemProgress = subIndex / 5; // 0 (midbrain junction) to 1 (inferior medulla)
          const stemY = radius * 0.12 + stemProgress * (radius * 0.52); // Positive Y descends down
          const stemRadius = (15 - stemProgress * 5) * (isMobile ? 0.8 : 1.0);
          const stemAngle = p.randomOffset + stemProgress * Math.PI * 2;

          tx = Math.cos(stemAngle) * stemRadius * 0.7;
          ty = stemY;
          tz = -radius * 0.06 + Math.sin(stemAngle) * stemRadius * 0.7;
        } else if (subIndex < 16) {
          // 2. CEREBELLUM (Lower-posterior with dense horizontal folial ridges)
          // Located at the lower back: inferior (+Y), posterior (-Z)
          const cIndex = subIndex - 6;
          const cLat = (cIndex / 9) * Math.PI * 0.55; // 0 to ~99 degrees
          const cLon = p.u * Math.PI; // across cerebellar hemisphere

          // Horizontal folial striations (parallel fine striations of cerebellar cortex)
          const folia = Math.sin(cLat * 22) * 4.5;
          const cProfile = radius * 0.34 + folia;

          const cx = hemi * (fissureGap * 0.6 + Math.sin(cLon) * cProfile * Math.sin(cLat) * 0.85);
          const cy = radius * 0.18 + Math.cos(cLat) * (radius * 0.28); // Lower back (positive Y)
          const cz = -radius * 0.36 - Math.cos(cLon) * (radius * 0.38) * Math.sin(cLat); // Posterior (negative Z)

          tx = cx;
          ty = cy;
          tz = cz;
        } else if (subIndex < 22) {
          // 3. CORPUS CALLOSUM & MEDIAL COMMISSURE (Connecting the two hemispheres)
          // Arched commissural band deep in the longitudinal fissure
          const archT = (subIndex - 16) / 5;
          const archAngle = archT * Math.PI; // 0 to PI arch
          tx = hemi * (fissureGap * 0.45 + Math.sin(archAngle) * 8);
          ty = -radius * 0.12 - Math.sin(archAngle) * (radius * 0.24); // Arched gently under the cortex
          tz = (archT - 0.5) * (radius * 0.65);
        } else if (subIndex < 28) {
          // 4. DEEP INTERNAL AXONAL PATHWAYS & THALAMOCORTICAL PROJECTIONS (Dense internal volume, zero hollow space)
          const deepT = (subIndex - 22) / 5;
          const deepRadius = radius * (0.22 + deepT * 0.38);
          const deepAngle = p.u * Math.PI * 2;
          const deepLat = (p.v + 0.5) * Math.PI * 0.6;
          tx = hemi * (fissureGap * 0.7 + Math.sin(deepLat) * Math.sin(deepAngle) * deepRadius * 0.65);
          ty = -Math.cos(deepLat) * (deepRadius * 0.68) - radius * 0.08;
          tz = Math.cos(deepAngle) * (deepRadius * 0.78);
        } else {
          // 5. CEREBRAL CORTEX (Frontal, Parietal, Occipital & Temporal Lobes with deep Gyri & Sulci)
          // Parameterized with true latitude (apex -> base) and longitude (anterior -> posterior)
          const lat = (p.v + 0.5) * Math.PI * 0.54; // 0 (superior crown apex) to ~97° (inferior base)
          const lon = p.u * Math.PI; // 0 (anterior frontal pole) to PI (posterior occipital pole)

          // Mathematical model of authentic cortical gyri and sulci
          const gyrus1 = Math.sin(lon * 9.5 + lat * 7.0) * 0.13;
          const gyrus2 = Math.cos(lon * 13.5 - lat * 9.5) * 0.09;
          const gyrus3 = Math.sin(lon * 18.0 + Math.cos(lat) * 11.0) * 0.05;
          const primarySulcus = Math.abs(Math.sin(lon * 4.5 + lat * 2.5)) * 0.07;

          // Anatomical lobe sculpting:
          // Frontal lobe anterior prominence (+Z, upper crown)
          const isFrontal = Math.cos(lon) > 0.2;
          const frontalMod = isFrontal ? 0.08 : 0;

          // Temporal lobe lateral/inferior bulge (lateral sides near base)
          const isTemporal = lat > Math.PI * 0.32 && Math.sin(lon) > 0.5;
          const temporalMod = isTemporal ? 0.16 : 0;

          // Occipital lobe posterior curvature (-Z)
          const isOccipital = Math.cos(lon) < -0.3;
          const occipitalMod = isOccipital ? 0.06 : 0;

          const corticalProfile =
            0.88 + gyrus1 + gyrus2 + gyrus3 - primarySulcus + frontalMod + temporalMod + occipitalMod;

          // Anatomical dimensions:
          // ty: strictly negative at the apex (TOP OF SCREEN) rising to base around 0
          const tyCortex = -Math.cos(lat) * (radius * 0.76 * corticalProfile);
          // tx: lateral width for the hemisphere (split by central fissure)
          const txCortex = Math.sin(lat) * Math.sin(lon) * (radius * 0.74 * corticalProfile);
          // tz: anterior-posterior length (+Z front, -Z back)
          const tzCortex = Math.cos(lon) * (radius * 1.02 * corticalProfile);

          tx = hemi * (fissureGap + txCortex);
          ty = tyCortex;
          tz = tzCortex;
        }
      } else if (path === 'learn') {
        // --- LEARN: Hierarchical Concept Lattice (Branching skill clusters & cross-domain rungs) ---
        const numHubs = 7;
        const hubIndex = i % numHubs;
        const hubAngle = (hubIndex / numHubs) * Math.PI * 2;
        const hubRadius = radius * 0.78;
        const hubX = Math.cos(hubAngle) * hubRadius;
        const hubY = Math.sin(hubAngle) * (hubRadius * 0.55);
        const hubZ = Math.sin(hubAngle * 2) * (radius * 0.35);

        if (i % 16 === 0) {
          // Keystone concept hubs
          tx = hubX;
          ty = hubY;
          tz = hubZ;
        } else if (i % 6 === 0) {
          // Cross-domain bridge rungs
          const nextAngle = ((hubIndex + 1) / numHubs) * Math.PI * 2;
          const nextX = Math.cos(nextAngle) * hubRadius;
          const nextY = Math.sin(nextAngle) * (hubRadius * 0.55);
          const nextZ = Math.sin(nextAngle * 2) * (radius * 0.35);

          const lerp = (i % 12) / 12;
          const arc = Math.sin(lerp * Math.PI) * 44;
          tx = hubX * (1 - lerp) + nextX * lerp;
          ty = hubY * (1 - lerp) + nextY * lerp + arc;
          tz = hubZ * (1 - lerp) + nextZ * lerp;
        } else {
          // Radiating skill constellations
          const branchAngle = hubAngle + (p.v * 1.6);
          const branchDist = (0.2 + (i % 20) / 20 * 0.8) * (radius * 0.48);
          tx = hubX + Math.cos(branchAngle) * branchDist + (Math.sin(p.randomOffset) * 12);
          ty = hubY + Math.sin(branchAngle) * branchDist * 0.8 + (Math.cos(p.randomOffset) * 12);
          tz = hubZ + (p.u - 0.5) * (radius * 0.40);
        }
      } else if (path === 'research') {
        // --- RESEARCH: Evidence Synthesis Matrix (Evidentiary core, citation pillars, orbital source planes) ---
        if (i % 6 === 0) {
          // High-density verified synthesis core
          const phi = Math.acos(1 - 2 * p.u);
          const theta = Math.PI * 2 * (p.v + 0.5);
          const r = Math.pow(Math.random(), 0.6) * (radius * 0.36);
          tx = r * Math.sin(phi) * Math.cos(theta);
          ty = r * Math.sin(phi) * Math.sin(theta) * 0.82;
          tz = r * Math.cos(phi);
        } else if (i % 8 === 0) {
          // Vertical citation provenance pillars
          const pillarIndex = (i % 3) - 1;
          const h = (p.u - 0.5) * radius * 1.5;
          tx = pillarIndex * radius * 0.50 + Math.sin(p.randomOffset) * 14;
          ty = h;
          tz = Math.cos(p.randomOffset) * 24;
        } else {
          // Concentric inclined orbital source planes
          const ringIndex = i % 4;
          const ringRadius = radius * (0.64 + ringIndex * 0.26);
          const angle = (p.u * Math.PI * 6) + p.randomOffset;
          const inclination = 0.42 + ringIndex * 0.22;

          const rawX = Math.cos(angle) * ringRadius;
          const rawZ = Math.sin(angle) * ringRadius;
          tx = rawX + (p.v * 20);
          ty = Math.sin(angle * 2) * 28 + (rawZ * Math.sin(inclination) * 0.3);
          tz = rawZ * Math.cos(inclination);
        }
      } else {
        // --- WORKSPACE: Unified Cognitive Multigraph ---
        const moduleCount = 5;
        const modIdx = i % moduleCount;
        const baseAngle = (modIdx / moduleCount) * Math.PI * 2;
        const layerR = radius * (0.55 + (i % 3) * 0.22);

        const nodeX = Math.cos(baseAngle) * layerR;
        const nodeY = ((i % 5) - 2) * (radius * 0.24);
        const nodeZ = Math.sin(baseAngle) * layerR;

        if (i % 7 === 0) {
          tx = nodeX;
          ty = nodeY;
          tz = nodeZ;
        } else {
          const flow = (i % 14) / 14;
          const nextAngle = ((modIdx + 1) / moduleCount) * Math.PI * 2;
          const nextX = Math.cos(nextAngle) * layerR;
          const nextZ = Math.sin(nextAngle) * layerR;

          tx = nodeX * (1 - flow) + nextX * flow + Math.sin(p.randomOffset) * 14;
          ty = nodeY + Math.sin(flow * Math.PI) * 26;
          tz = nodeZ * (1 - flow) + nextZ * flow + Math.cos(p.randomOffset) * 14;
        }
      }

      p.targetX = tx;
      p.targetY = ty;
      p.targetZ = tz;
    }
  }

  public setPath(path: VeldrinPath) {
    this.config.activePath = path;
    this.computeStructuredTargets(path);
    this.triggerImpulse(0.7);
  }

  public triggerImpulse(intensity: number = 1.0) {
    const count = this.particles.length;
    for (let i = 0; i < count; i++) {
      const p = this.particles[i];
      const burst = (Math.random() - 0.5) * 32 * intensity;
      p.vx += burst;
      p.vy += (Math.random() - 0.5) * 24 * intensity;
      p.vz += (Math.random() - 0.5) * 32 * intensity;
    }
  }

  public setScrollProgress(progress: number) {
    this.config.scrollProgress = Math.max(0, Math.min(1, progress));
  }

  public start() {
    if (this.animFrameId !== null) return;
    this.isDestroyed = false;

    const loop = (timestamp: number) => {
      if (this.isDestroyed) return;

      this.update(timestamp);
      this.render(timestamp);

      this.frameCount++;
      if (timestamp - this.lastFpsUpdate >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (timestamp - this.lastFpsUpdate));
        this.frameCount = 0;
        this.lastFpsUpdate = timestamp;
      }

      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  private update(time: number) {
    const motionFactor = this.prefersReducedMotion ? 0.08 : 1.0;
    const tSeconds = time * 0.001 * this.config.speed * motionFactor;
    const progress = this.config.scrollProgress;

    // Smooth camera tilt
    this.rotX += (this.targetRotX - this.rotX) * 0.04;
    this.rotY += (this.targetRotY - this.rotY) * 0.04;

    // Smooth Morphing Transition Weights:
    // 0.0 -> 0.16: 100% Pure undulating wave (Image 4 inspired)
    // 0.16 -> 0.38: Drawing inward towards semantic cluster
    // 0.38 -> 0.78: Crystallizing into enlarged anatomical structure
    // 0.78+: Full semantic structure
    let waveWeight = 1.0;
    let clusterWeight = 0.0;
    let structWeight = 0.0;

    if (progress <= 0.16) {
      waveWeight = 1.0;
      clusterWeight = 0.0;
      structWeight = 0.0;
    } else if (progress <= 0.38) {
      const t = (progress - 0.16) / 0.22;
      waveWeight = 1.0 - t;
      clusterWeight = t * (1.0 - t * 0.35);
      structWeight = t * t * 0.55;
    } else if (progress <= 0.78) {
      const t = (progress - 0.38) / 0.40;
      const smooth = t * t * (3 - 2 * t);
      waveWeight = 0.0;
      clusterWeight = (1.0 - smooth) * 0.20;
      structWeight = smooth + (1.0 - smooth) * 0.80;
    } else {
      waveWeight = 0.0;
      clusterWeight = 0.0;
      structWeight = 1.0;
    }

    const count = this.particles.length;
    // Ambient slow rotation of the structured object
    const objRotY = tSeconds * 0.09 * structWeight;
    const cosObj = Math.cos(objRotY);
    const sinObj = Math.sin(objRotY);

    for (let i = 0; i < count; i++) {
      const p = this.particles[i];

      // 1. UNDULATING 3D TOPOGRAPHICAL PERSPECTIVE SHEET (Image 4 style)
      // Parallel isolines that rise into swooping crests, roll into valleys
      const u = p.u;
      const v = p.v; // -0.5 to 0.5

      // Harmonic landscape elevation
      const waveElevation =
        Math.sin(u * Math.PI * 3.4 - tSeconds * 0.35 + v * 2.8) * 95 +
        Math.cos(v * Math.PI * 2.6 + u * 1.8 + tSeconds * 0.15) * 75 +
        Math.sin((u + v) * 5.2 - tSeconds * 0.22) * 45 - 25;

      // Depth modulation in 3D perspective space
      const waveZ = v * 580 + Math.sin(u * Math.PI * 2.8 + tSeconds * 0.28) * 140;

      // Negative space preservation in viewport center for hero typography
      const centerDist = Math.abs(u - 0.5) * 2;
      const centralRepel = Math.max(0, 1.0 - centerDist);
      const verticalBifurcation = v >= 0 ? 1 : -1;
      const centerOpening = centralRepel * 44 * verticalBifurcation;

      const waveX = (u - 0.5) * (this.width * 1.55) + v * 90;
      const waveY = waveElevation + centerOpening;

      // 2. INTERMEDIATE CLUSTERING WITH LOCAL FILAMENTS
      const clusterX = p.clusterX + Math.sin(tSeconds * 0.8 + p.randomOffset) * 8;
      const clusterY = p.clusterY + Math.cos(tSeconds * 0.7 + p.randomOffset) * 8;
      const clusterZ = p.clusterZ;

      // 3. TARGET STRUCTURE WITH SLOW 3D ROTATION
      const rotTargetX = p.targetX * cosObj + p.targetZ * sinObj;
      const rotTargetZ = -p.targetX * sinObj + p.targetZ * cosObj;
      const rotTargetY = p.targetY;

      // 4. CONTINUOUS BLEND DRIVEN BY SCROLL PROGRESS
      const goalX = waveX * waveWeight + clusterX * clusterWeight + rotTargetX * structWeight;
      const goalY = waveY * waveWeight + clusterY * clusterWeight + rotTargetY * structWeight;
      const goalZ = waveZ * waveWeight + clusterZ * clusterWeight + rotTargetZ * structWeight;

      // 5. VERLET SPRING PHYSICS
      const dx = goalX - p.x;
      const dy = goalY - p.y;
      const dz = goalZ - p.z;

      const stiffness = this.prefersReducedMotion ? 0.08 : 0.038;
      const damping = this.prefersReducedMotion ? 0.75 : 0.88;

      p.vx = (p.vx + dx * stiffness) * damping;
      p.vy = (p.vy + dy * stiffness) * damping;
      p.vz = (p.vz + dz * stiffness) * damping;

      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;
    }
  }

  private render(time: number) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    const fov = 520;
    const tSeconds = time * 0.001;

    const cosCamX = Math.cos(this.rotX);
    const sinCamX = Math.sin(this.rotX);
    const cosCamY = Math.cos(this.rotY);
    const sinCamY = Math.sin(this.rotY);

    interface ProjectedPoint {
      sx: number;
      sy: number;
      z: number;
      size: number;
      alpha: number;
      color: string;
      ribbonIndex: number;
    }

    const projected: ProjectedPoint[] = [];

    // Screen-space 3D perspective projection
    const count = this.particles.length;
    for (let i = 0; i < count; i++) {
      const p = this.particles[i];

      const x1 = p.x * cosCamY + p.z * sinCamY;
      const z1 = -p.x * sinCamY + p.z * cosCamY;
      const y2 = p.y * cosCamX - z1 * sinCamX;
      const z2 = p.y * sinCamX + z1 * cosCamX;

      const zEff = z2 + 650;
      if (zEff < 20) continue;

      const scale = fov / zEff;
      const sx = centerX + x1 * scale;
      const sy = centerY + y2 * scale;

      // Shimmering metallic glint in pure silver, pearl, and graphite
      const depthFactor = Math.max(0.18, Math.min(1.0, (1180 - zEff) / 800));
      const shimmer = Math.sin(tSeconds * p.twinkleSpeed + p.twinkleOffset) * 0.06;
      const finalAlpha = Math.max(0.08, Math.min(0.94, p.alpha * depthFactor + shimmer));

      let color = this.COLOR_SILVER_PEARL;
      switch (p.materialType) {
        case 'silver_specular':
          color = this.COLOR_SILVER_SPECULAR;
          break;
        case 'silver_light':
          color = this.COLOR_SILVER_LIGHT;
          break;
        case 'silver_pearl':
          color = this.COLOR_SILVER_PEARL;
          break;
        case 'silver_quiet':
          color = this.COLOR_SILVER_QUIET;
          break;
        case 'graphite_light':
          color = this.COLOR_GRAPHITE_LIGHT;
          break;
        case 'graphite_mid':
          color = this.COLOR_GRAPHITE_MID;
          break;
        case 'graphite_deep':
          color = this.COLOR_GRAPHITE_DEEP;
          break;
        case 'charcoal':
          color = this.COLOR_CHARCOAL;
          break;
        case 'accent_lavender':
          color = this.COLOR_ACCENT_LAVENDER;
          break;
        default:
          color = this.COLOR_SILVER_PEARL;
      }

      // Microscopic fine particles
      const size = Math.max(0.55, p.baseSize * scale * 1.15);

      projected.push({
        sx,
        sy,
        z: zEff,
        size,
        alpha: finalAlpha,
        color,
        ribbonIndex: p.ribbonIndex,
      });
    }

    // 1. DELICATE STRAND ISOLINES (Like parallel contour lines in Image 4)
    if (this.config.scrollProgress < 0.32) {
      const strandAlpha = Math.max(0, 1 - (this.config.scrollProgress / 0.32)) * 0.09;
      ctx.lineWidth = 0.55;

      for (let i = 0; i < projected.length - 1; i++) {
        const p1 = projected[i];
        const p2 = projected[i + 1];

        // Draw connections along same longitudinal ribbon contour
        if (p1.ribbonIndex === p2.ribbonIndex) {
          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.hypot(dx, dy);

          if (dist < 65) {
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = strandAlpha * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
          }
        }
      }
    } else if (this.config.connectNearby) {
      // Filamental semantic connections during structured brain / graph phase
      const maxDist = this.config.maxDistance;
      const stride = 3;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < projected.length; i += stride) {
        const p1 = projected[i];
        for (let j = i + stride; j < Math.min(projected.length, i + 18); j += stride) {
          const p2 = projected[j];
          const dx = p1.sx - p2.sx;
          const dy = p1.sy - p2.sy;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            const linkAlpha = (1 - dist / maxDist) * 0.12 * Math.min(p1.alpha, p2.alpha);
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = linkAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.sx, p1.sy);
            ctx.lineTo(p2.sx, p2.sy);
            ctx.stroke();
          }
        }
      }
    }

    // 2. RENDER PURE METALLIC SILVER & PEARL PARTICLES
    const projCount = projected.length;
    for (let i = 0; i < projCount; i++) {
      const pt = projected[i];

      // Radiant metallic halo for specular pearl and silver particles
      if (pt.size > 1.2 && pt.alpha > 0.55) {
        ctx.globalAlpha = pt.alpha * 0.22;
        ctx.fillStyle = pt.color;
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, pt.size * 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = pt.alpha;
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.sx, pt.sy, pt.size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1.0;
  }

  public destroy() {
    this.isDestroyed = true;
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
