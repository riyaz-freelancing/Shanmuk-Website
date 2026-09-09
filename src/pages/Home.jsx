import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Utensils, Trophy, Users, Award, ChevronRight, ArrowRight, CheckCircle2, Star, Zap, Activity, Sparkles, ChevronLeft, Check } from 'lucide-react';
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
  // Hero Auto-scrolling Carousel Slides
  const heroSlides = [
    {
      id: 1,
      type: "Gym Workout",
      title: "Full Body & PPL Gym Splits",
      subtitle: "50+ Exercises with sets, reps & rest timers",
      tag: "Gym Training Routine",
      badgeColor: "bg-emerald-500 text-white",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      icon: Dumbbell
    },
    {
      id: 2,
      type: "Nutrition Diet",
      title: "High-Protein Gourmet Meal Plans",
      subtitle: "Calculated calories, protein, carbs & healthy fats",
      tag: "Nutrition & Macro Blueprint",
      badgeColor: "bg-amber-500 text-white",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80",
      icon: Utensils
    },
    {
      id: 3,
      type: "Coach Shanmuk",
      title: "1-on-1 Personalized Coaching",
      subtitle: "Direct video form check & weekly WhatsApp check-ins",
      tag: "Personal Coaching",
      badgeColor: "bg-cyan-500 text-white",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
      icon: Trophy
    },
    {
      id: 4,
      type: "Fat Loss & Shred",
      title: "Accelerated Fat Burn & Recomp",
      subtitle: "Caloric deficit meals paired with high-energy lifting",
      tag: "Fat Loss Program",
      badgeColor: "bg-emerald-600 text-white",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=80",
      icon: Zap
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // AUTO-SCROLL EFFECT (Rotates every 3.5 seconds)
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
    <div className="space-y-24 pb-16 pt-24 sm:pt-28 bg-slate-50 text-slate-900">

      {/* WHITE THEME ULTRA HERO SECTION */}
      <section className="relative overflow-hidden">
        
        {/* Subtle Glow Backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Announcement Badge */}
          <div className="flex justify-center lg:justify-start mb-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-emerald-500/30 text-emerald-700 text-xs font-extrabold tracking-wide shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Coaching & Custom Diet Platform by Coach Shanmuk</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Main Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] font-sans">
                Build Your <br />
                <span className="text-gradient-brand">Strongest Version</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Personalized workout routines and scientific nutrition plans designed to help you build strength, burn fat, pack on lean muscle, and maintain daily discipline.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={getWhatsAppUrl("Hi Shanmuk, I am ready to start my gym and diet transformation!")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-lg shadow-emerald-500/25 transition-all hover:scale-105"
                >
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                  <span>Start on WhatsApp (+91 8317688770)</span>
                </a>

                <Link to="/workouts" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white text-slate-800 border-slate-300 hover:bg-slate-100">
                    Explore Plans
                  </Button>
                </Link>
              </div>

              {/* Trust Checkpoints */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold text-slate-700 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Custom Gym Splits</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Macro Meal Plans</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>1-on-1 Coaching</span>
                </div>
              </div>
            </motion.div>

            {/* HERO AUTO-SCROLLING CAROUSEL SLIDER */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative mx-auto rounded-3xl overflow-hidden bg-white border border-slate-200 p-3 shadow-2xl group">
                
                {/* Active Slide Image */}
                <div className="relative h-[380px] sm:h-[450px] rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover object-center"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 font-extrabold text-xs shadow-md border border-slate-200 flex items-center gap-2">
                    <currentSlide.icon className="w-4 h-4 text-emerald-600" />
                    <span>{currentSlide.tag}</span>
                  </div>

                  {/* Manual Carousel Controls */}
                  <button
                    onClick={handlePrevSlide}
                    className="absolute top-1/2 left-3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-md transition-all"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="absolute top-1/2 right-3 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-md transition-all"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Bottom Info Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-1">
                    <div className="text-sm font-black text-slate-900">{currentSlide.title}</div>
                    <div className="text-xs font-semibold text-slate-600">{currentSlide.subtitle}</div>
                  </div>
                </div>

                {/* Auto Scroll Indicator Dots */}
                <div className="flex items-center justify-center gap-2 pt-3">
                  {heroSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlideIndex === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
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
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-xl shadow-emerald-500/30 transition-all hover:scale-105"
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
