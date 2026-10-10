import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { useExperience } from '../hooks/useExperience';
import { ArrowRight, Check } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { scrollTo, activePath } = useExperience();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="get-started" className="pt-36 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative">
      {/* Onboarding Invitation Surface in Layered Translucent Glass */}
      <div className="p-10 sm:p-16 rounded-3xl veldrin-glass-card shadow-2xl relative overflow-hidden max-w-2xl mx-auto mb-32 text-center ring-1 ring-[rgba(185,174,255,0.2)]">
        <div className="absolute top-0 right-1/4 w-64 h-32 bg-[rgba(185,174,255,0.06)] rounded-full blur-3xl pointer-events-none" />

        {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
        <div className="mb-6 veldrin-pill-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
          <span>ONBOARDING INVITATION · 7-DAY INSTANT TRIAL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.03em] text-[#FFFFFF] mb-4 font-heading">
          Ready to bridge the gap to your target rank?
        </h2>
        <p className="text-[rgba(245,245,247,0.62)] text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed font-light">
          Upload your textbook or mark sheet. Discover the 20% of high-yield concepts driving 80% of your exam score today.
        </p>

        {submitted ? (
          <div className="p-5 rounded-2xl bg-[rgba(30,39,73,0.4)] border border-[rgba(185,174,255,0.3)] text-[#FFFFFF] text-sm flex items-center justify-center gap-3 max-w-md mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="w-6 h-6 rounded-full bg-[#FFFFFF] text-[#030407] flex items-center justify-center text-xs font-bold shrink-0">
              ✓
            </div>
            <div className="text-left">
              <span className="font-medium block text-[#FFFFFF]">Syllabus Diagnostic Initialized</span>
              <span className="text-xs text-[rgba(245,245,247,0.62)] font-light">
                Your instant calibration link was sent to <strong>{email}</strong>.
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-2">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to start"
                className="veldrin-glass-input flex-1 px-5 py-3.5 rounded-full text-xs placeholder:text-[rgba(245,245,247,0.4)]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] shadow-[0_0_25px_rgba(185,174,255,0.35)] shrink-0"
              >
                <span>Calibrate My Syllabus Free</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
            {error && <p className="text-[#B9AEFF] text-xs text-left pt-1 font-light pl-4">{error}</p>}
            <p className="text-[11px] text-[rgba(245,245,247,0.5)] pt-2 font-light">
              ✓ Free 7-Day Access · No Credit Card Required · Instant Diagnostic
            </p>
          </form>
        )}
      </div>

      {/* Restrained Architectural Footer */}
      <footer className="pt-10 text-xs text-[rgba(245,245,247,0.5)]">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <Logo className="w-4 h-4 text-[#FFFFFF]" />
              <span className="font-semibold text-[#FFFFFF] tracking-wider text-sm">
                VELDRIN
              </span>
            </div>
            <p className="text-xs text-[rgba(245,245,247,0.5)] font-light leading-relaxed max-w-xs">
              A personalized AI learning and knowledge workspace for academic mastery, self-directed engineering, and deep research synthesis.
            </p>
          </div>

          {/* Col 2: Product */}
          <div>
            <div className="font-medium text-[#F5F5F7] mb-3 uppercase tracking-wider text-[11px]">Product</div>
            <ul className="space-y-2 font-light text-[rgba(245,245,247,0.6)]">
              <li><button onClick={() => scrollTo('#study')} className="hover:text-[#FFFFFF] cursor-pointer">Study</button></li>
              <li><button onClick={() => scrollTo('#learn')} className="hover:text-[#FFFFFF] cursor-pointer">Learn</button></li>
              <li><button onClick={() => scrollTo('#research')} className="hover:text-[#FFFFFF] cursor-pointer">Research</button></li>
              <li><button onClick={() => scrollTo('#workspace')} className="hover:text-[#FFFFFF] cursor-pointer">Workspace</button></li>
              <li><button onClick={() => scrollTo('#pricing')} className="hover:text-[#FFFFFF] cursor-pointer">Pricing</button></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <div className="font-medium text-[#F5F5F7] mb-3 uppercase tracking-wider text-[11px]">Company</div>
            <ul className="space-y-2 font-light text-[rgba(245,245,247,0.6)]">
              <li><a href="#" className="hover:text-[#FFFFFF]">Architecture</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">Manifesto</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">Research Group</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Social */}
          <div>
            <div className="font-medium text-[#F5F5F7] mb-3 uppercase tracking-wider text-[11px]">Legal &amp; Social</div>
            <ul className="space-y-2 font-light text-[rgba(245,245,247,0.6)]">
              <li><a href="#" className="hover:text-[#FFFFFF]">Privacy Standard</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">Provenance Protocol</a></li>
              <li><a href="#" className="hover:text-[#FFFFFF]">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[rgba(255,255,255,0.06)] text-[rgba(245,245,247,0.4)] font-light text-[11px]">
          <div>© {new Date().getFullYear()} Veldrin Systems. All rights reserved.</div>
          <div>Built with precision for learners, engineers, and thinkers.</div>
        </div>
      </footer>
    </section>
  );
};
