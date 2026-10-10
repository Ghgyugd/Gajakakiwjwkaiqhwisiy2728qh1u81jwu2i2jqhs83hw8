import React, { useState } from 'react';
import { Logo } from './Logo';
import { useExperience } from '../hooks/useExperience';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { scrollTo } = useExperience();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target: string | number) => {
    setMobileMenuOpen(false);
    scrollTo(target);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[rgba(3,4,7,0.7)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Lockup: Logo + Veldrin Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(0);
          }}
          className="flex items-center gap-2.5 text-[#FFFFFF] hover:text-[#FFFFFF] transition-colors cursor-pointer group"
        >
          <Logo className="w-5 h-5 text-[#FFFFFF] group-hover:drop-shadow-[0_0_10px_rgba(185,174,255,0.8)] transition-all" />
          <span className="text-sm font-semibold tracking-[0.16em] text-[#FFFFFF] font-heading">
            VELDRIN
          </span>
        </a>

        {/* Desktop Navigation Fields */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[rgba(245,245,247,0.62)]">
          <button
            onClick={() => handleNavClick(0)}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('#why-not-chatgpt')}
            className="hover:text-[#B9AEFF] transition-colors cursor-pointer font-normal text-[#B9AEFF]"
          >
            Why Not ChatGPT?
          </button>
          <button
            onClick={() => handleNavClick('#study')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Study
          </button>
          <button
            onClick={() => handleNavClick('#learn')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Learn
          </button>
          <button
            onClick={() => handleNavClick('#research')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Research
          </button>
          <button
            onClick={() => handleNavClick('#workspace')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Workspace
          </button>
          <button
            onClick={() => handleNavClick('#pricing')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer font-normal"
          >
            Pricing
          </button>
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleNavClick('#get-started')}
            className="px-5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300 flex items-center gap-1.5 bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] shadow-[0_0_20px_rgba(185,174,255,0.3)] hover:scale-[1.02] active:scale-[0.99] group"
          >
            <span>Calibrate Free</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgba(3,4,7,0.96)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.08)] px-6 py-5 flex flex-col gap-4 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleNavClick(0)}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('#why-not-chatgpt')}
            className="text-left text-[#B9AEFF] hover:text-[#FFFFFF] py-1 cursor-pointer font-medium"
          >
            Why Not ChatGPT?
          </button>
          <button
            onClick={() => handleNavClick('#study')}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Study
          </button>
          <button
            onClick={() => handleNavClick('#learn')}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Learn
          </button>
          <button
            onClick={() => handleNavClick('#research')}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Research
          </button>
          <button
            onClick={() => handleNavClick('#workspace')}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Workspace
          </button>
          <button
            onClick={() => handleNavClick('#pricing')}
            className="text-left text-[rgba(245,245,247,0.7)] hover:text-[#FFFFFF] py-1 cursor-pointer font-light"
          >
            Pricing
          </button>
          <div className="pt-2 border-t border-[rgba(255,255,255,0.08)]">
            <button
              onClick={() => handleNavClick('#get-started')}
              className="w-full py-3 rounded-full text-xs font-semibold cursor-pointer text-center bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] shadow-[0_0_20px_rgba(185,174,255,0.3)] flex items-center justify-center gap-1.5"
            >
              <span>Calibrate Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
