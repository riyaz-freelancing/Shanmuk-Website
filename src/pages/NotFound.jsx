import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-24 pb-16 text-center">
      <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl glass-card border border-gray-800 space-y-6 shadow-2xl">
        
        {/* Animated Dumbbell Icon */}
        <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
          <Dumbbell className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-6xl font-black text-emerald-400 font-sans">404</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Oops! Workout Not Found
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            The page or fitness routine you are looking for doesn't exist, was renamed, or is currently rest day!
          </p>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <Link to="/">
            <Button variant="primary" fullWidth size="lg" icon={Home}>
              Back to Home
            </Button>
          </Link>
          <Link to="/workouts">
            <Button variant="secondary" fullWidth size="md">
              Browse Workout Plans
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};
