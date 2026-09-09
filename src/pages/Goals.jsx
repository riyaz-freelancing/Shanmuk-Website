import React from 'react';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import { GoalCard } from '../components/GoalCard';
import { GOALS_DATA } from '../data/goals';
import { Button } from '../components/Button';
import { getWhatsAppUrl } from '../config/constants';

export const Goals = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Targeted Fitness Blueprint
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Find Your <span className="text-gradient-brand">Fitness Goal</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Whether you want to drop body fat, increase peak bench press power, or build symmetric muscle, select your goal to view matching plans.
        </p>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GOALS_DATA.map((goal, index) => (
          <GoalCard key={goal.id} goal={goal} index={index} />
        ))}
      </div>

      {/* Goal Match CTA Banner */}
      <div className="p-8 sm:p-12 rounded-3xl glass-card border border-gray-800 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
          <Target className="w-6 h-6" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Unsure Which Goal Fits Your Current Physique?
        </h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto">
          Send Coach Shanmuk your height, current weight, and fitness background for a personalized 1-on-1 goal assessment.
        </p>
        <div>
          <Button
            href={getWhatsAppUrl("Hi Shanmuk, I need help assessing my fitness goals and picking the right plan.")}
            external
            variant="whatsapp"
            size="lg"
          >
            Get Free Goal Assessment
          </Button>
        </div>
      </div>

    </div>
  );
};
