import React from 'react';
import { Dumbbell, Clock, RefreshCw, Lightbulb, CheckCircle2 } from 'lucide-react';

export const ExerciseCard = ({ exercise, index = 0 }) => {
  return (
    <div className="p-5 rounded-2xl bg-dark-800/90 border border-gray-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4">
      
      {/* Exercise Title & Number */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
            {index + 1}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
            {exercise.name}
          </h4>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-dark-700 text-gray-300 border border-gray-700 shrink-0">
          {exercise.equipment}
        </span>
      </div>

      {/* Sets, Reps, Rest Metrics Bar */}
      <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-dark-900/80 border border-gray-800 text-center">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Sets</div>
          <div className="text-base font-extrabold text-white">{exercise.sets}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Reps</div>
          <div className="text-base font-extrabold text-emerald-400">{exercise.reps}</div>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Rest</div>
          <div className="text-base font-extrabold text-cyan-400 flex items-center justify-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {exercise.rest}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-xs text-gray-300 leading-relaxed flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <span>{exercise.instructions}</span>
      </div>

      {/* Trainer Tip Box */}
      {exercise.trainerTip && (
        <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-300/90 flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 fill-emerald-500/20" />
          <div>
            <strong className="text-emerald-400 font-semibold">Trainer Shanmuk's Tip: </strong>
            {exercise.trainerTip}
          </div>
        </div>
      )}
    </div>
  );
};
