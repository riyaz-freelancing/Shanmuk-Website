import React, { useState } from 'react';
import { Dumbbell, Filter } from 'lucide-react';
import { WorkoutCard } from '../components/WorkoutCard';
import { WORKOUT_PLANS } from '../data/workouts';

export const Workouts = () => {
  const [selectedLevel, setSelectedLevel] = useState('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredPlans = selectedLevel === 'All'
    ? WORKOUT_PLANS
    : WORKOUT_PLANS.filter((plan) => plan.level === selectedLevel);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Training Programs
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Structured <span className="text-gradient-brand">Workout Plans</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          From full-body beginner splits to high-volume PPL shred routines. Pick the ideal plan matched to your experience and daily schedule.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-4 border-b border-gray-800">
        <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold mr-2">
          <Filter className="w-4 h-4 text-emerald-400" /> Filter Level:
        </div>
        {levels.map((level) => (
          <button
            key={level}
            onClick={() => setSelectedLevel(level)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedLevel === level
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-gray-800'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Workout Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlans.map((plan, index) => (
          <WorkoutCard key={plan.id} plan={plan} index={index} />
        ))}
      </div>

    </div>
  );
};
