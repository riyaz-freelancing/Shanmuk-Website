import React, { useState } from 'react';
import { Utensils, Filter } from 'lucide-react';
import { DietCard } from '../components/DietCard';
import { DIET_PLANS, DIET_DISCLAIMER } from '../data/diets';

export const Diet = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Weight Loss', 'Muscle Gain', 'High Protein', 'Vegetarian', 'Balanced'];

  const filteredDiets = selectedCategory === 'All'
    ? DIET_PLANS
    : DIET_PLANS.filter((d) => d.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 space-y-12">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          Macronutrient Precision
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          Customized <span className="text-gradient-brand">Diet Plans</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Nutrient-dense meal blueprints designed to power your workouts, optimize metabolism, and accelerate lean physical transformation.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap pb-4 border-b border-gray-800">
        <div className="flex items-center gap-1 text-xs text-gray-400 font-semibold mr-2">
          <Filter className="w-4 h-4 text-emerald-400" /> Category:
        </div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === category
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                : 'bg-dark-800 text-gray-400 hover:text-white hover:bg-dark-700 border border-gray-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Diet Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiets.map((diet, index) => (
          <DietCard key={diet.id} diet={diet} index={index} />
        ))}
      </div>

      {/* Disclaimer banner */}
      <div className="p-4 rounded-2xl bg-dark-900 border border-gray-800 text-xs text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
        <strong className="text-gray-300">Nutritional Disclaimer:</strong> {DIET_DISCLAIMER}
      </div>

    </div>
  );
};
