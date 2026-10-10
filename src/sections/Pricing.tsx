import React, { useState } from 'react';
import { useExperience } from '../hooks/useExperience';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { scrollTo, triggerImpulse } = useExperience();
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plus');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: currency === 'INR' ? '₹0' : '$0',
      period: 'forever',
      description: 'Essential exploratory access and community resources for students starting out.',
      badge: null,
      features: [
        '3 subjects & syllabus ingestion',
        'Basic adaptive timetable',
        '20 AI tutor messages/day',
        'Community resources & formulas',
      ],
      buttonLabel: 'Start Free',
      isPrimary: false,
    },
    {
      id: 'weekly',
      name: 'Weekly Sprint',
      price: currency === 'INR' ? '₹299' : '$4.99',
      period: 'per week',
      description: 'Full 7-day sprint access for immediate exam preparation and intensive revision.',
      badge: null,
      features: [
        'All subjects unlocked',
        '7-day high-intensity access',
        'Full adaptive timetable & catch-up',
        '150 AI tutor messages/day',
        'Chapter + weekly diagnostic exams',
      ],
      buttonLabel: 'Start Sprint',
      isPrimary: false,
    },
    {
      id: 'plus',
      name: 'Pro Learning OS',
      price: currency === 'INR' ? '₹899' : '$15',
      period: 'per month',
      dailyAnchor: currency === 'INR' ? '₹29 / day' : '$0.50 / day',
      description: 'The complete Learning OS with uncapped subjects, persistent Mistake Vault, and adaptive daily recovery.',
      badge: 'RECOMMENDED · BEST VALUE',
      features: [
        'Uncapped subjects & textbooks',
        'Unlimited AI tutor messages & proofs',
        'Full adaptive Learning OS timetable',
        'Persistent Mistake Vault & spaced drills',
        'Unlimited chapter + weekly + monthly exams',
        'Living React artifacts & code sandbox',
        'Streak insurance protection (3/month)',
      ],
      buttonLabel: 'Claim 7-Day Free Trial',
      isPrimary: true,
    },
    {
      id: 'pro',
      name: 'Rank Accelerator',
      price: currency === 'INR' ? '₹2,499' : '$49',
      period: 'per month',
      description: 'For competitive entrance students needing fastest responses and advanced analytics.',
      badge: null,
      features: [
        'Everything in Pro Learning OS',
        'Priority AI — lowest latency responses',
        'Deep rank trajectory analytics',
        'Unlimited streak insurance',
        'Early access to new board models',
      ],
      buttonLabel: 'Get Started',
      isPrimary: false,
    },
    {
      id: 'max',
      name: 'Enterprise / Family',
      price: currency === 'INR' ? '₹4,999' : '$99',
      period: 'per month',
      description: 'Zero caps, dedicated fastest-tier frontier AI models, and multi-student workspace.',
      badge: null,
      features: [
        'Everything in Rank Accelerator',
        'Unlimited everything, no rate caps',
        'Dedicated fastest-tier AI engine',
        'Multi-student workspace — 5 accounts',
        'Dedicated tutor support — 24hr SLA',
      ],
      buttonLabel: 'Get Started',
      isPrimary: false,
    },
  ];

  return (
    <section id="pricing" className="min-h-screen py-36 px-6 sm:px-10 md:px-16 lg:px-20 max-w-7xl mx-auto z-10 relative flex flex-col justify-center">
      {/* Chapter Marker */}
      <div className="mb-14 text-center max-w-2xl mx-auto">
        {/* Sleek Dark Frosted Floating Pill Badge with Lavender Border and Glowing Dot */}
        <div className="mb-6 veldrin-pill-badge">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B9AEFF] shadow-[0_0_8px_#B9AEFF] animate-pulse" />
          <span>STAGE 07 · TRANSPARENT ACCESS &amp; GUARANTEE</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] text-[#FFFFFF] leading-[1.08] mb-4 font-heading">
          Simple, honest pricing.
        </h2>

        {/* Value Anchor Banner (CRO Psychological Principle) */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(18,22,31,0.6)] border border-[rgba(185,174,255,0.3)] backdrop-blur-xl shadow-[0_0_20px_rgba(185,174,255,0.12)]">
          <span className="text-xs sm:text-sm text-[#F5F5F7] font-normal">
            ☕ <strong className="text-[#B9AEFF] font-medium">{currency === 'INR' ? '₹29/day' : '$0.50/day'}</strong> — Less than the price of a single cup of {currency === 'INR' ? 'tea' : 'coffee'} for guaranteed rank improvement.
          </span>
        </div>

        <p className="text-base text-[rgba(245,245,247,0.62)] font-light leading-relaxed mb-8">
          From basic exploration to the full adaptive Learning OS. Choose the tier that matches your academic goals.
        </p>

        {/* Currency Segmented Toggle */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-[rgba(18,22,31,0.6)] border border-[rgba(255,255,255,0.08)] backdrop-blur-xl gap-1">
          <button
            onClick={() => {
              setCurrency('INR');
              triggerImpulse(0.5);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              currency === 'INR'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF]'
            }`}
          >
            INR (₹)
          </button>
          <button
            onClick={() => {
              setCurrency('USD');
              triggerImpulse(0.5);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              currency === 'USD'
                ? 'bg-[#FFFFFF] text-[#030407] font-semibold shadow-md'
                : 'text-[rgba(245,245,247,0.6)] hover:text-[#FFFFFF]'
            }`}
          >
            USD ($)
          </button>
        </div>
      </div>

      {/* Responsive Grid of the 5 Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch mb-12">
        {plans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          const isPlus = plan.id === 'plus';

          return (
            <div
              key={plan.id}
              onClick={() => {
                setSelectedPlanId(plan.id);
                triggerImpulse(0.6);
              }}
              className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 relative cursor-pointer veldrin-glass-card ${
                isPlus
                  ? 'ring-1 ring-[rgba(185,174,255,0.4)] shadow-[0_30px_70px_rgba(0,0,0,0.6)] scale-[1.02]'
                  : 'shadow-xl'
              }`}
            >
              {/* Recommended Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] uppercase font-mono tracking-wider bg-[#030407] border border-[rgba(185,174,255,0.4)] text-[#B9AEFF] shadow-md whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className={`text-base font-medium font-heading ${isPlus ? 'text-[#FFFFFF]' : 'text-[#F5F5F7]'}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className="text-[11px] text-[rgba(245,245,247,0.55)] font-light leading-relaxed mb-4 min-h-[32px]">
                  {plan.description}
                </p>

                <div className="pb-4 border-b border-[rgba(255,255,255,0.08)] mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-medium text-[#FFFFFF] font-mono">{plan.price}</span>
                    <span className="text-[11px] text-[rgba(245,245,247,0.5)] font-light">/ {plan.period.replace('per ', '')}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-xs text-[rgba(245,245,247,0.7)] font-light">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isPlus ? 'text-[#B9AEFF]' : 'text-[rgba(245,245,247,0.4)]'}`} />
                      <span className="text-[11px] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerImpulse(0.8);
                    scrollTo('#get-started');
                  }}
                  className={`w-full py-2.5 px-4 text-xs font-semibold cursor-pointer text-center transition-all rounded-full flex items-center justify-center gap-1.5 ${
                    plan.isPrimary
                      ? 'bg-[#FFFFFF] text-[#030407] hover:bg-[#F5F5F7] shadow-[0_0_20px_rgba(185,174,255,0.3)]'
                      : 'bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.15)] text-[#FFFFFF] border border-[rgba(255,255,255,0.14)]'
                  }`}
                >
                  <span>{plan.buttonLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guarantee Badge */}
      <div className="max-w-md mx-auto p-4 rounded-2xl veldrin-glass-card flex items-center justify-center gap-3 text-xs text-[rgba(245,245,247,0.62)] text-center font-light">
        <ShieldCheck className="w-4 h-4 text-[#B9AEFF] shrink-0" />
        <span>7-day free trial on all paid plans · Cancel anytime in one click · No credit card required to explore</span>
      </div>
    </section>
  );
};
