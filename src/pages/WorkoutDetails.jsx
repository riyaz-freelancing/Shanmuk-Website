import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Dumbbell, Zap, CheckCircle2, MessageSquare } from 'lucide-react';
import { WORKOUT_PLANS } from '../data/workouts';
import { ExerciseCard } from '../components/ExerciseCard';
import { Button } from '../components/Button';
import { getWhatsAppUrl } from '../config/constants';

export const WorkoutDetails = () => {
  const { id } = useParams();
  const plan = WORKOUT_PLANS.find((p) => p.id === id) || WORKOUT_PLANS[0];
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  if (!plan) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Workout Plan Not Found</h2>
        <Link to="/workouts">
          <Button variant="primary">Back to Workout Plans</Button>
        </Link>
      </div>
    );
  }

  const currentDay = plan.days[activeDayIndex] || plan.days[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-10">
      
      {/* Back Link */}
      <Link
        to="/workouts"
        className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-emerald-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Workouts
      </Link>

      {/* Plan Header Card */}
      <div className="p-6 sm:p-10 rounded-3xl glass-card border border-gray-800 relative overflow-hidden space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {plan.level}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {plan.frequency}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {plan.title}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
              {plan.description}
            </p>
          </div>

          {/* Action CTA */}
          <div className="shrink-0">
            <Button
              href={getWhatsAppUrl(`Hi Shanmuk, I am starting the ${plan.title} workout plan and would like personal coaching updates.`)}
              external
              variant="whatsapp"
              size="lg"
              icon={MessageSquare}
            >
              Request Custom Modifications
            </Button>
          </div>
        </div>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-800 text-xs">
          <div>
            <div className="text-gray-500 uppercase font-bold text-[10px]">Split Type</div>
            <div className="text-white font-semibold">{plan.split}</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase font-bold text-[10px]">Session Duration</div>
            <div className="text-emerald-400 font-semibold">{plan.duration}</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase font-bold text-[10px]">Primary Goal</div>
            <div className="text-white font-semibold">{plan.goal}</div>
          </div>
          <div>
            <div className="text-gray-500 uppercase font-bold text-[10px]">Equipment Required</div>
            <div className="text-cyan-400 font-semibold">{plan.equipment}</div>
          </div>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-6 h-6 text-emerald-400" />
            Daily Exercise Schedules
          </h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {plan.days.map((day, idx) => (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDayIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                activeDayIndex === idx
                  ? 'bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/25'
                  : 'bg-dark-800 text-gray-400 border-gray-800 hover:text-white hover:bg-dark-700'
              }`}
            >
              Day {day.dayNumber} — {day.dayTitle.split(' - ')[0]}
            </button>
          ))}
        </div>

        {/* Active Day Details & Exercise List */}
        <div className="p-6 sm:p-8 rounded-3xl glass-card border border-gray-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
            <div>
              <h3 className="text-xl font-extrabold text-white">
                {currentDay.dayTitle}
              </h3>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                Focus Areas: {currentDay.focus}
              </p>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              {currentDay.exercises.length} Exercises Included
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentDay.exercises.map((exercise, idx) => (
              <ExerciseCard key={idx} exercise={exercise} index={idx} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
