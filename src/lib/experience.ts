export type VeldrinPath = 'study' | 'learn' | 'research' | 'workspace';

export type StageId =
  | 'waves'
  | 'problem'
  | 'architecture'
  | 'paths'
  | 'study'
  | 'learn'
  | 'research'
  | 'workspace'
  | 'artifacts'
  | 'knowledge'
  | 'agent'
  | 'pricing'
  | 'access';

export interface PathDefinition {
  id: VeldrinPath;
  name: string;
  tagline: string;
  audience: string;
  scope: string;
  accentColor: string;
  highlightColor: string;
  structureName: string;
  structureDescription: string;
  capabilities: {
    title: string;
    description: string;
  }[];
}

export const VELDRIN_PATHS: Record<VeldrinPath, PathDefinition> = {
  study: {
    id: 'study',
    name: 'Study',
    tagline: 'Your bridge between the syllabus you have and the rank you want.',
    audience: 'School boards (CBSE, ICSE, State), competitive entrance (JEE, NEET, Olympiads), and academic curricula',
    scope: 'Textbook-grounded learning, diagnostic weak-subject extraction, and adaptive daily timetables',
    accentColor: '#ced4da',
    highlightColor: '#fafaff',
    structureName: 'Biological Neural Architecture',
    structureDescription:
      'A multi-layered asymmetrical neural volume with two distinct cerebral hemispheres separated by a deep longitudinal fissure, cortical gyri and sulci convolutions, and internal commissural pathways.',
    capabilities: [
      {
        title: 'Understand Me',
        description: 'Upload your report card. Veldrin detects your class, maps your official syllabus, and diagnoses weak subjects.',
      },
      {
        title: 'Tell Me What Matters Now',
        description: 'Nightly recalculation prioritizes overdue topics, factors in regional holidays, and automatically heals missed days.',
      },
      {
        title: 'Make Me Better',
        description: 'Teaches from your prescribed textbook with exact page citations and board-pattern chapter exams.',
      },
      {
        title: 'Whole System',
        description: 'Complete Learning OS convergence: 30-day intelligence reports, board-class leaderboards, and streak tracking.',
      },
    ],
  },
  learn: {
    id: 'learn',
    name: 'Learn',
    tagline: 'Self-directed mastery of skills and concepts outside a fixed school syllabus.',
    audience: 'Engineers, builders, and independent learners pursuing DSA, programming, systems, or personal curiosity',
    scope: 'First-principles scaffolding, mental model deconstruction, and interactive code verification',
    accentColor: '#e4d9ff',
    highlightColor: '#fafaff',
    structureName: 'Hierarchical Concept Lattice',
    structureDescription:
      'An organic asymmetrical knowledge lattice with branching skill clusters, cross-domain bridges, and multi-tier concept constellations.',
    capabilities: [
      {
        title: 'Define the Goal',
        description: 'Master subjects on your own terms—from Data Structures & Algorithms to distributed systems architecture.',
      },
      {
        title: 'Build an Adaptive Path',
        description: 'Flexible scheduling that adapts around your available hours without forcing you into rigid school calendars.',
      },
      {
        title: 'Learn / Practice / Create',
        description: 'Bare-metal mental models backed by interactive code benchmarking, memory simulations, and practice sandboxes.',
      },
      {
        title: 'Flexible Learning Workspace',
        description: 'Synthesizes cross-domain principles so concepts transfer fluidly between engineering and system design.',
      },
    ],
  },
  research: {
    id: 'research',
    name: 'Research',
    tagline: 'Deep exploration, source synthesis, and structured citation-aware investigation.',
    audience: 'Scholars, analysts, and serious thinkers reading dense primary literature',
    scope: 'Corpus ingestion, cryptographic citation provenance, contradiction detection, and synthesis briefs',
    accentColor: '#adb5bd',
    highlightColor: '#f8f9fa',
    structureName: 'Evidence Synthesis Matrix',
    structureDescription:
      'A dense evidentiary core with vertical citation pillars, orbital source planes, and cross-document relational filaments.',
    capabilities: [
      {
        title: 'Bring Source Material',
        description: 'Upload research papers, PDFs, manuscripts, and data tables into an active spatial index.',
      },
      {
        title: 'Connect and Synthesize',
        description: 'Enforces strict textual provenance: every claim links directly to its source paper, page, and paragraph.',
      },
      {
        title: 'Create Useful Knowledge',
        description: 'Identifies scientific disputes and empirical contradictions across papers to build state-of-the-art taxonomies.',
      },
      {
        title: 'Research Workspace',
        description: 'Rich-text and pressure-sensitive drawing canvas for iPad/Apple Pencil notes with permanent citations.',
      },
    ],
  },
  workspace: {
    id: 'workspace',
    name: 'Workspace',
    tagline: 'An intelligent environment around everyday AI work, tools, documents, and living artifacts.',
    audience: 'Thinkers, engineers, and everyday ChatGPT/Claude users who need a structured workspace around interactions',
    scope: 'Multi-tool agency, live sandboxes, permanent notes, interactive artifacts, and persistent memory',
    accentColor: '#e4d9ff',
    highlightColor: '#fafaff',
    structureName: 'Unified Cognitive Multigraph',
    structureDescription:
      'A spatial arrangement connecting conversations, notes, documents, code, artifacts, and persistent memory into a single surface.',
    capabilities: [
      {
        title: 'Ask & Route',
        description: 'Multi-provider AI routing across frontier models with live web search, URL scraping, and precise math calculation.',
      },
      {
        title: 'Work with Tools',
        description: 'Code execution sandboxes, real diagram and image generation, and multi-step reasoning before answering.',
      },
      {
        title: 'Create Living Artifacts',
        description: 'Interactive React components, complete timed exams, playable AI chess games, and structured documents.',
      },
      {
        title: 'Remember & Organize',
        description: 'Notion/Obsidian-style editor with permanent, organized notes that never evaporate when the chat window closes.',
      },
    ],
  },
};

export interface ParticleConfig {
  count: number;
  speed: number;
  baseSize: number;
  connectNearby: boolean;
  maxDistance: number;
  scrollProgress: number;
  activePath: VeldrinPath;
}

export const DEFAULT_CONFIG: ParticleConfig = {
  count: 2800,
  speed: 1.0,
  baseSize: 1.6,
  connectNearby: true,
  maxDistance: 50,
  scrollProgress: 0,
  activePath: 'study',
};
