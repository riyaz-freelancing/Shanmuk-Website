import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Utensils, Trophy, Users, Award, ChevronRight, ArrowRight, CheckCircle2, Star, Zap, Activity, Sparkles, ChevronLeft, Check, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { GoalCard } from '../components/GoalCard';
import { WorkoutCard } from '../components/WorkoutCard';
import { DietCard } from '../components/DietCard';
import { GOALS_DATA } from '../data/goals';
import { WORKOUT_PLANS } from '../data/workouts';
import { DIET_PLANS } from '../data/diets';
import { getWhatsAppUrl } from '../config/constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const Home = () => {
  // FULL SIZE HERO SLIDES
  const heroSlides = [
    {
      id: 1,
      tag: "Gym Workout Split",
      title: "Build Your Strongest Version",
      subtitle: "Personalized gym workouts & scientific nutrition plans designed to help you build strength, lose fat, and stay consistent for life.",
      badge: "50+ Gym Routines & Exercises",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Gym Workouts",
      ctaLink: "/workouts",
      icon: Dumbbell
    },
    {
      id: 2,
      tag: "Macronutrient Precision",
      title: "Custom High-Protein Diet Plans",
      subtitle: "Delicious, sustainable nutrition meal plans calculated down to exact calories, protein, carbohydrates, and healthy fats.",
      badge: "100+ Verified Diet Blueprints",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1920&q=80",
      cta: "Explore Meal Plans",
      ctaLink: "/diet",
      icon: Utensils
    },
    {
      id: 3,
      tag: "1-on-1 Personal Coaching",
      title: "Direct WhatsApp Video & Form Checks",
      subtitle: "Get weekly check-ins, exercise form corrections, and direct 1-on-1 accountability with Coach Shanmuk.",
      badge: "500+ Verified Client Transformations",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1920&q=80",
      cta: "Start 1-on-1 Coaching",
      ctaLink: "/about",
      icon: Trophy
    },
    {
      id: 4,
      tag: "Fat Loss & Shred",
      title: "Accelerated Fat Burn & Body Recomp",
      subtitle: "Strip off stubborn fat while preserving lean muscle mass through metabolic resistance training and clean caloric deficit.",
      badge: "Hypertrophy & Fat Loss Split",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1920&q=80",
      cta: "View Fitness Goals",
      ctaLink: "/goals",
      icon: Zap
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // AUTO-SCROLL CAROUSEL TIMER (Rotates every 3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentSlide = heroSlides[currentSlideIndex];

  const stats = [
    { label: "Active Members", value: "500+", sub: "Verified Transformations", icon: Users },
    { label: "Gym Workout Splits", value: "50+", sub: "Beginner to Advanced", icon: Dumbbell },
    { label: "Nutritional Diet Plans", value: "100+", sub: "Macros Verified", icon: Utensils },
    { label: "Coaching Experience", value: "5+ Yrs", sub: "1-on-1 WhatsApp Support", icon: Award },
  ];

  const features = [
    { title: "Personalized Workouts", desc: "Scientific exercise routines structured for your body type, experience level, and equipment access.", icon: Activity },
    { title: "Targeted Nutrition", desc: "Delicious, sustainable high-protein meal plans calculated down to exact daily calories and macros.", icon: Utensils },
    { title: "1-on-1 WhatsApp Coaching", desc: "Direct video form checks, weekly progress reviews, and instant accountability with Coach Shanmuk.", icon: WhatsAppIcon },
    { title: "Trackable Progress", desc: "Log your weights, track weekly body composition, and celebrate strength milestone gains.", icon: Trophy },
  ];

  const testimonials = [
    { name: "Vikram R.", result: "Lost 14 kg in 16 Weeks", quote: "Coach Shanmuk's customized PPL routine and high-protein diet transformed my body without extreme starvation. My bench press went up by 40 kg!", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", goal: "Fat Loss & Muscle Shred" },
    { name: "Ananya K.", result: "Gained 6 kg Lean Muscle", quote: "Finding a trainer who specializes in vegetarian protein meal plans was life-changing! Delicious, easy to make, and super effective.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80", goal: "Vegetarian Muscle Gain" },
    { name: "Karthik P.", result: "Bench PR: 60kg → 105kg", quote: "The progressive overload structure keeps me challenged every week. Coach Shanmuk's WhatsApp form check saved my shoulders!", rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", goal: "Power & Pure Strength" },
  ];

  return (
    <div className="space-y-20 pb-16 pt-16 sm:pt-20 bg-slate-50 text-slate-900 overflow-x-hidden">

      {/* FULL-SIZE HERO BANNER WITH TEXT OVERLAY & AUTO-SLIDER */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Full-Size Background Slide Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Rich Dark Gradient Overlay for Maximum Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container Layered Directly On Top Of Image */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-white w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Tag Badge */}
            <motion.div
              key={`tag-${currentSlide.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-extrabold tracking-wide backdrop-blur-md"
            >
              <currentSlide.icon className="w-4 h-4 text-emerald-400" />
              <span>{currentSlide.tag}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-1" />
            </motion.div>

            {/* Main Full-Size Headline */}
            <motion.h1
              key={`title-${currentSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] font-sans drop-shadow-lg"
            >
              {currentSlide.title}
            </motion.h1>

            {/* Supporting Subtitle */}
            <motion.p
              key={`sub-${currentSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-medium drop-shadow"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Action Buttons Layered on Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a
                href={getWhatsAppUrl("Hi Shanmuk, I am ready to start my gym and diet transformation!")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
                <span>Start on WhatsApp (+91 8317688770)</span>
              </a>

              <Link to={currentSlide.ctaLink}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md">
                  {currentSlide.cta}
                </Button>
              </Link>
            </motion.div>

            {/* Feature Pills */}
            <div className="pt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-300 border-t border-slate-800/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Custom Gym Splits
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Macro Meal Schedules
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-on-1 Coaching
              </span>
            </div>

          </div>
        </div>

        {/* Manual Carousel Arrows */}
        <button
          onClick={handlePrevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-md border border-slate-700 transition-all shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-900/70 hover:bg-emerald-600 text-white flex items-center justify-center backdrop-blur-md border border-slate-700 transition-all shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicator Dots & Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlideIndex === idx ? 'w-8 bg-emerald-400' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* STATISTICS COUNTERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 text-center shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-extrabold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FITNESS GOALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
            Targeted Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Choose Your <span className="text-gradient-brand">Fitness Goal</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select your target physical goal to unlock customized training splits and macronutrient food schedules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOALS_DATA.map((goal, index) => (
            <GoalCard key={goal.id} goal={goal} index={index} />
          ))}
        </div>
      </section>

      {/* FEATURED WORKOUT PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
              Gym Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Featured Gym Workout Plans
            </h2>
          </div>
          <Link
            to="/workouts"
            className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-extrabold text-sm"
          >
            <span>Explore All Gym Programs</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORKOUT_PLANS.map((plan, index) => (
            <WorkoutCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </section>

      {/* FEATURED DIET PLANS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200">
              Macronutrient Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Featured Nutrition & Diet Plans
            </h2>
          </div>
          <Link
            to="/diet"
            className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-extrabold text-sm"
          >
            <span>Explore All Meal Blueprints</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DIET_PLANS.slice(0, 3).map((diet, index) => (
            <DietCard key={diet.id} diet={diet} index={index} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE COACH SHANMUK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-lg relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Why Train With Coach <span className="text-emerald-600">Shanmuk?</span>
            </h2>
            <p className="text-slate-600 text-sm">
              Built on exercise science, sustainable meal flexibility, and dedicated accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 hover:border-emerald-500/40 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
            Step-by-Step
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            How Your Transformation Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base shadow-md">1</span>
            <h3 className="text-xl font-bold text-slate-900">1. Select Goal & Level</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Choose your target goal (fat loss, muscle gain, strength) and current gym experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base shadow-md">2</span>
            <h3 className="text-xl font-bold text-slate-900">2. Receive Custom Blueprints</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Access complete daily workout schedules and macro-balanced meal prep guides.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <span className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold flex items-center justify-center text-base shadow-md">3</span>
            <h3 className="text-xl font-bold text-slate-900">3. Direct WhatsApp Support</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Send exercise videos to Coach Shanmuk for form correction and weekly progress reviews.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200">
            Real Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            What Members Achieve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {t.goal}
                  </span>
                </div>
                <p className="text-slate-700 text-xs italic leading-relaxed">"{t.quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs font-bold text-emerald-600">{t.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-6 relative overflow-hidden shadow-2xl text-white">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Build Your <span className="text-emerald-400">Best Physique?</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Get structured gym workout routines and scientific nutrition plans designed specifically for your goals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl("Hi Shanmuk, I would like to start my gym and diet plan today!")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6 text-white" />
              <span>Chat on WhatsApp (+91 8317688770)</span>
            </a>
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700">
                Fill Contact Form
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
