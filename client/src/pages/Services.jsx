import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowRight, Sparkles, HelpCircle, Layers, ShieldCheck, Zap } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import StatsCounter from '../components/StatsCounter';
import { usePackage } from '../context/PackageContext';

const Services = () => {
  const navigate = useNavigate();
  const { selectPackageAndGo } = usePackage();

  const comparisonFeatures = [
    { name: 'Number of Pages', basic: '1 to 2 Pages', business: 'More than 2 Pages (Multi-Page)' },
    { name: 'Custom Design with Logo Integration', basic: 'Standard Modern Layout', business: 'Tailored Business Brand Aesthetics' },
    { name: 'Responsive Mobile + Desktop Design', basic: true, business: true },
    { name: 'Interactive Contact Form', basic: true, business: true },
    { name: 'Instant Email Alerts & Client Auto-Reply', basic: 'Basic Email', business: 'Instant Dual Nodemailer Notifications' },
    { name: 'Google Maps Integration', basic: false, business: true },
    { name: 'Direct WhatsApp Floating Button', basic: false, business: true },
    { name: 'Animations & Effects', basic: 'Basic Scroll Animations', business: 'Advanced 3D Tilt + Mouse Glow Effects' },
    { name: 'On-Page SEO & Meta Tags', basic: 'Basic Meta Tags', business: 'Full On-Page SEO + Schema Markup' },
    { name: 'Lighthouse Performance 90+ Score', basic: true, business: true },
    { name: 'Free Post-Launch Support & Minor Edits', basic: '7 Days', business: '30 Days' },
    { name: 'Turnaround Time', basic: '3 to 5 Days', business: '7 to 10 Days' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* ══════════════════════════════════════
          1. HEADER
          ══════════════════════════════════════ */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
          Services & Transparent Pricing
        </span>
        <h1 className="light-bg-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          Clear, Fixed-Price Web Packages
        </h1>
        <p className="light-bg-copy text-slate-400 text-sm sm:text-base mt-4 leading-relaxed">
          No hidden hourly fees, no surprises. Pick a package designed to meet your specific goals, from personal branding to growing an established small business.
        </p>
      </section>

      {/* ══════════════════════════════════════
          2. THE TWO PRICING PACKAGES (Section 4)
          ══════════════════════════════════════ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
        {/* Package 1: Basic Portfolio */}
        <TiltCard className="p-8 sm:p-10 glass-panel rounded-3xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                Starter Package
              </span>
              <span className="text-xs text-[#B8B8C7] font-medium">3–5 Days Turnaround</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              BASIC PORTFOLIO WEBSITE
            </h2>
            <p className="text-[#B8B8C7] text-sm mb-6 leading-relaxed">
              Designed for individual professionals, creatives, students, and freelancers who want a polished personal profile to win clients or land jobs.
            </p>

            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-white tracking-tight">
                <StatsCounter target={5000} prefix="₹" />
              </span>
              <span className="text-xs text-[#B8B8C7] ml-2">/ one-time fee</span>
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-6" />

            <ul className="space-y-3.5 text-sm text-[#B8B8C7] mb-8">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span><strong className="text-white">1 to 2 pages</strong> (Focused, high-impact layout)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Personal portfolio / profile website</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Responsive design (mobile + desktop)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Working interactive contact form</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Basic scroll animations & micro-interactions</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Basic SEO setup (meta tags & social cards)</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => selectPackageAndGo('Basic Portfolio Website (₹5,000)', navigate)}
            className="w-full py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Get Started with Basic Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </TiltCard>

        {/* Package 2: Business Website (Most Popular) */}
        <TiltCard
          className="p-8 sm:p-10 glass-panel rounded-3xl flex flex-col justify-between"
          glow
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-3.5 py-1 rounded-full btn-magenta-gradient text-white shadow-md">
                ★ Most Popular Choice
              </span>
              <span className="text-xs text-[#C71BFF] font-medium">7–10 Days Turnaround</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              BUSINESS WEBSITE
            </h2>
            <p className="text-slate-200 text-sm mb-6 leading-relaxed">
              Complete multi-page web presence for small businesses, agencies, and clinics looking to build authority and convert visitors into paying clients.
            </p>

            <div className="mb-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C71BFF] to-[#7B2FF7] tracking-tight">
                <StatsCounter target={9000} prefix="₹" />
              </span>
              <span className="text-xs text-[#B8B8C7] ml-2">/ one-time fee</span>
            </div>

            <div className="h-[1px] w-full bg-white/10 mb-6" />

            <ul className="space-y-3.5 text-sm text-slate-200 mb-8">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span><strong className="text-white">More than 2 pages</strong> (Multi-page comprehensive architecture)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Custom business design with logo placement & branding</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Powerful landing page designed for conversion</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Advanced scroll animations + interactive mouse effects</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Contact form with email notifications & automated client replies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Google Maps integration + Floating WhatsApp button</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#C71BFF] mt-0.5 shrink-0" />
                <span>Full On-Page SEO setup & 30 days of post-launch maintenance</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => selectPackageAndGo('Business Website (₹9,000)', navigate)}
            className="w-full py-4 rounded-xl font-bold text-sm text-white btn-magenta-gradient shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Started with Business Website</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </TiltCard>
      </section>

      {/* Note below the cards */}
      <div className="mb-20 text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
        <p className="text-base text-slate-300">
          Need something custom? E-commerce catalog, booking system, or multi-lingual site?{' '}
          <Link
            to="/contact"
            onClick={() => selectPackageAndGo('Custom Quote / Other', navigate)}
            className="text-cyan-400 font-bold underline hover:text-cyan-300 ml-1"
          >
            Contact me for a quote.
          </Link>
        </p>
      </div>

      {/* ══════════════════════════════════════
          3. FEATURE COMPARISON TABLE
          ══════════════════════════════════════ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Compare Package Features
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/80 text-xs uppercase text-slate-400 border-b border-slate-800 font-semibold">
              <tr>
                <th className="py-4 px-6">Feature</th>
                <th className="py-4 px-6 text-center">Basic Portfolio (₹5,000)</th>
                <th className="py-4 px-6 text-center text-purple-400">Business Website (₹9,000)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {comparisonFeatures.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">{row.name}</td>
                  <td className="py-4 px-6 text-center">
                    {typeof row.basic === 'boolean' ? (
                      row.basic ? (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-xs text-slate-300">{row.basic}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-950/10">
                    {typeof row.business === 'boolean' ? (
                      row.business ? (
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-600 mx-auto" />
                      )
                    ) : (
                      <span className="text-xs text-purple-200 font-semibold">{row.business}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Services;
