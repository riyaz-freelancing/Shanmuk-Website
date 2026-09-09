import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Users, CheckCircle2, ShieldCheck, Heart, Dumbbell, Flame, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/constants';

export const About = () => {
  const certifications = [
    { title: "Certified Personal Trainer (CPT)", body: "International Sports Sciences Association / ACE Accredited" },
    { title: "Sports Nutrition Specialist", body: "Macronutrient periodization & body recomposition" },
    { title: "Functional Strength & Conditioning", body: "Barbell mechanics, squat & deadlift posture perfection" },
    { title: "Fat Loss & Metabolic Reset", body: "Sustainable caloric deficit strategies without starvation" },
  ];

  const milestones = [
    { number: "500+", label: "Transformations", desc: "Guided male & female clients to target weight & muscle goals" },
    { number: "5+ Years", label: "Coaching Experience", desc: "Dedicated full-time gym & nutrition consulting" },
    { number: "98.4%", label: "Client Satisfaction", desc: "Proven track record of long-term physique maintenance" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-16">
      
      {/* Hero Trainer Profile Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Trainer Visual Banner */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden glass-card border border-gray-800 p-3 shadow-2xl">
            <div className="h-[450px] sm:h-[500px] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                alt="Coach Shanmuk"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-dark-900/90 backdrop-blur-md border border-gray-700/80 shadow-2xl">
                <h3 className="text-xl font-extrabold text-white">Shanmuk</h3>
                <p className="text-xs text-emerald-400 font-semibold">{SITE_CONFIG.title}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{SITE_CONFIG.experience} Professional Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Philosophy */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Meet Your Coach
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Hi, I'm <span className="text-emerald-400">Shanmuk</span>. <br />
            I Help People Build Lifelong Physique & Strength.
          </h1>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              My coaching philosophy is simple: <strong className="text-white">Fitness should enhance your life, not consume it.</strong> I don't believe in dangerous crash diets, endless hours of monotonous cardio, or extreme unmaintainable routines.
            </p>
            <p>
              Over the past 5+ years, I have coached over 500+ clients across India and internationally. Whether you are a beginner stepping into the gym for the very first time, or an advanced lifter striving to break past a strength plateau, my structured approach guarantees results.
            </p>
          </div>

          {/* Key Coaching Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-gray-200">Science-Backed Resistance Training</span>
            </div>
            <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-gray-200">Flexible Macro Nutrition Plans</span>
            </div>
            <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-gray-200">1-on-1 Form Check & Feedback</span>
            </div>
            <div className="p-3.5 rounded-xl bg-dark-800/80 border border-gray-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs font-bold text-gray-200">Weekly WhatsApp Progress Reviews</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Button
              href={getWhatsAppUrl("Hi Shanmuk, I read your about page and I want to start 1-on-1 coaching with you.")}
              external
              variant="primary"
              size="lg"
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Start Training with Shanmuk
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Contact Coach
              </Button>
            </Link>
          </div>
        </div>

      </div>

      {/* MILESTONES & ACHIEVEMENTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {milestones.map((m, idx) => (
          <div key={idx} className="p-6 rounded-2xl glass-card border border-gray-800 text-center space-y-2">
            <div className="text-4xl font-black text-emerald-400 font-sans">{m.number}</div>
            <div className="text-base font-bold text-white">{m.label}</div>
            <p className="text-xs text-gray-400">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* CERTIFICATIONS & CREDENTIALS */}
      <div className="p-8 sm:p-10 rounded-3xl glass-card border border-gray-800 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Professional Accreditation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Certifications & Qualifications
            </h2>
          </div>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30">
            Verified Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <div key={i} className="p-5 rounded-2xl bg-dark-800/80 border border-gray-800 space-y-2 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{c.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
