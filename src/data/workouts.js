export const WORKOUT_PLANS = [
  {
    id: "beginner-full-body",
    title: "Beginner Full-Body Foundation",
    level: "Beginner",
    frequency: "3 Days / Week",
    split: "Full Body Split",
    duration: "45-60 Mins",
    intensity: "Beginner Friendly",
    goal: "Weight Loss & Strength Base",
    equipment: "Dumbbells, Barbells, Cable Machines",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    description: "Designed for newcomers or those returning to fitness. Establishes proper movement mechanics, core strength, and steady endurance without over-fatiguing joints.",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Full Body A - Strength & Form",
        focus: "Chest, Back, Legs & Core",
        exercises: [
          {
            name: "Barbell Back Squat / Goblet Squat",
            sets: 3,
            reps: "10-12",
            rest: "90 sec",
            equipment: "Barbell / Dumbbell",
            instructions: "Keep chest up, hinge hips back, lower until thighs are parallel to the floor.",
            trainerTip: "Focus on pushing through your heels and bracing your core tightly."
          },
          {
            name: "Incline Dumbbell Press",
            sets: 3,
            reps: "10-12",
            rest: "60 sec",
            equipment: "Bench, Dumbbells",
            instructions: "Set bench to 30 degrees. Press dumbbells straight up focusing on upper chest contraction.",
            trainerTip: "Do not let the dumbbells clink at the top; maintain tension throughout."
          },
          {
            name: "Lat Pulldown",
            sets: 3,
            reps: "12",
            rest: "60 sec",
            equipment: "Cable Pulldown Machine",
            instructions: "Pull bar down to upper chest while driving elbows down toward your back pockets.",
            trainerTip: "Avoid excessive leaning back. Squeeze your lats at the bottom."
          },
          {
            name: "Dumbbell Romanian Deadlift",
            sets: 3,
            reps: "12",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Hinge at the hips with a slight bend in knees. Lower dumbbells along shins.",
            trainerTip: "Feel the stretch in your hamstrings, squeeze glutes at top."
          },
          {
            name: "Plank Hold",
            sets: 3,
            reps: "45 sec",
            rest: "45 sec",
            equipment: "Bodyweight",
            instructions: "Keep body in a rigid straight line from head to heels.",
            trainerTip: "Squeeze glutes and pull belly button toward spine."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Full Body B - Balance & Conditioning",
        focus: "Shoulders, Arms, Glutes & Cardio",
        exercises: [
          {
            name: "Seated Dumbbell Shoulder Press",
            sets: 3,
            reps: "10-12",
            rest: "60 sec",
            equipment: "Dumbbells, Bench",
            instructions: "Press dumbbells overhead until arms are extended, lower under control.",
            trainerTip: "Keep lower back flat against the bench padding."
          },
          {
            name: "Seated Cable Row",
            sets: 3,
            reps: "12",
            rest: "60 sec",
            equipment: "Cable Row Machine",
            instructions: "Pull handle toward abdomen, retraction shoulder blades together.",
            trainerTip: "Keep shoulders down away from your ears."
          },
          {
            name: "Dumbbell Lunge",
            sets: 3,
            reps: "10 per leg",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Step forward, lower rear knee toward ground at 90 degree angle.",
            trainerTip: "Keep front knee aligned over front ankle."
          },
          {
            name: "Tricep Rope Pushdown",
            sets: 3,
            reps: "15",
            rest: "45 sec",
            equipment: "Cable Machine",
            instructions: "Extend arms down and flare rope ends outward at full extension.",
            trainerTip: "Lock elbows in place at your sides."
          },
          {
            name: "Bicep Dumbbell Curls",
            sets: 3,
            reps: "12",
            rest: "45 sec",
            equipment: "Dumbbells",
            instructions: "Curl dumbbells up while keeping elbows pinned to your torso.",
            trainerTip: "Control the negative lowering phase for 2 full seconds."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Full Body C - Core & Stamina",
        focus: "Legs, Back, Chest & Abs",
        exercises: [
          {
            name: "Leg Press Machine",
            sets: 3,
            reps: "12-15",
            rest: "75 sec",
            equipment: "Leg Press Machine",
            instructions: "Place feet shoulder-width apart. Lower sled until knees hit 90 degrees.",
            trainerTip: "Never lock out your knees forcibly at the top."
          },
          {
            name: "Push-ups (Standard or Knee)",
            sets: 3,
            reps: "10-15",
            rest: "60 sec",
            equipment: "Bodyweight",
            instructions: "Lower chest to ground keeping elbows at 45 degree angle to torso.",
            trainerTip: "Maintain rigid plank alignment through the entire set."
          },
          {
            name: "Single-Arm Dumbbell Row",
            sets: 3,
            reps: "12 per arm",
            rest: "60 sec",
            equipment: "Dumbbell, Bench",
            instructions: "Support one knee on bench, row dumbbell up toward hip.",
            trainerTip: "Avoid twisting your torso at the top."
          },
          {
            name: "Hanging Knee Raises",
            sets: 3,
            reps: "15",
            rest: "45 sec",
            equipment: "Pull-up Bar",
            instructions: "Hang from bar, contract abs to lift knees to chest height.",
            trainerTip: "Avoid swinging or using momentum."
          }
        ]
      }
    ]
  },
  {
    id: "intermediate-hypertrophy",
    title: "Intermediate Upper / Lower Hypertrophy",
    level: "Intermediate",
    frequency: "4 Days / Week",
    split: "Upper / Lower Split",
    duration: "60-75 Mins",
    intensity: "Moderate / High",
    goal: "Lean Muscle Hypertrophy & Shape",
    equipment: "Full Gym Setup",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    description: "The gold standard split for consistent muscular growth. Separates upper body and lower body into dedicated high-volume training sessions with optimal 48-hour recovery windows.",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Upper Body A - Heavy Push & Pull",
        focus: "Chest, Back, Shoulders & Arms",
        exercises: [
          {
            name: "Barbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Barbell, Flat Bench",
            instructions: "Lower bar under control to mid-chest. Drive up powerfully.",
            trainerTip: "Retract scapula and arch upper back slightly for maximum chest activation."
          },
          {
            name: "Bent-Over Barbell Row",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Barbell",
            instructions: "Hinge torso to 45 degrees, pull bar to upper abdomen.",
            trainerTip: "Drive with your elbows and squeeze shoulder blades together."
          },
          {
            name: "Standing Dumbbell Overhead Press",
            sets: 3,
            reps: "10",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Press dumbbells overhead without arching lower back excessively.",
            trainerTip: "Squeeze glutes to brace your spine."
          },
          {
            name: "Incline Cable Fly",
            sets: 3,
            reps: "12-15",
            rest: "60 sec",
            equipment: "Cable Machine",
            instructions: "Bring handles together in a hugging motion targeting upper chest.",
            trainerTip: "Keep a soft bend in elbows throughout."
          },
          {
            name: "Barbell EZ-Bar Curl",
            sets: 3,
            reps: "10-12",
            rest: "60 sec",
            equipment: "EZ-Bar",
            instructions: "Curl bar upwards squeezing biceps at peak contraction.",
            trainerTip: "Do not swing torso for momentum."
          },
          {
            name: "Skullcrushers (Lying Tricep Extension)",
            sets: 3,
            reps: "10-12",
            rest: "60 sec",
            equipment: "EZ-Bar, Bench",
            instructions: "Lower bar toward forehead, extend elbows to lock out.",
            trainerTip: "Keep upper arms perpendicular to the floor."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Lower Body A - Quad & Calves Focus",
        focus: "Quads, Hamstrings, Calves & Core",
        exercises: [
          {
            name: "Barbell Back Squat",
            sets: 4,
            reps: "6-8",
            rest: "120 sec",
            equipment: "Barbell, Squat Rack",
            instructions: "Squat below parallel, keep knees tracking over toes.",
            trainerTip: "Take a deep breath and brace core before descending."
          },
          {
            name: "Romanian Deadlift (RDL)",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Barbell",
            instructions: "Lower bar along legs hinging hips until deep hamstring stretch is felt.",
            trainerTip: "Keep back flat; do not round lumbar spine."
          },
          {
            name: "Walking Dumbbell Lunges",
            sets: 3,
            reps: "12 per leg",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Take wide strides down the turf, lowering rear knee under control.",
            trainerTip: "Keep torso upright."
          },
          {
            name: "Seated Leg Curl",
            sets: 3,
            reps: "12-15",
            rest: "60 sec",
            equipment: "Leg Curl Machine",
            instructions: "Flex knees to pull pad toward glutes under control.",
            trainerTip: "Control the eccentric 3-second return phase."
          },
          {
            name: "Standing Calf Raises",
            sets: 4,
            reps: "15-20",
            rest: "45 sec",
            equipment: "Calf Machine / Step",
            instructions: "Press up onto toes, pause 1 second at top, lower for deep stretch.",
            trainerTip: "Do not bounce; enforce full range of motion."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Upper Body B - Width & Rear Delts",
        focus: "Lats, Upper Chest, Side Delts & Arms",
        exercises: [
          {
            name: "Incline Dumbbell Bench Press",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Dumbbells, Adjustable Bench",
            instructions: "Press dumbbells up at 30-degree incline.",
            trainerTip: "Lower deep to stretch upper chest fibers."
          },
          {
            name: "Lat Pulldown (Wide Grip)",
            sets: 4,
            reps: "10-12",
            rest: "75 sec",
            equipment: "Cable Machine",
            instructions: "Pull bar down to clavicle, expand chest.",
            trainerTip: "Visualize pulling with your elbows, not hands."
          },
          {
            name: "Dumbbell Lateral Raises",
            sets: 4,
            reps: "15",
            rest: "45 sec",
            equipment: "Dumbbells",
            instructions: "Raise arms out to sides until parallel to ground.",
            trainerTip: "Lead with elbows, keep pinkies slightly turned up."
          },
          {
            name: "Cable Face Pulls",
            sets: 4,
            reps: "15-20",
            rest: "45 sec",
            equipment: "Rope Attachment",
            instructions: "Pull rope toward nose while externally rotating shoulders.",
            trainerTip: "Essential for shoulder health and rear delt volume."
          },
          {
            name: "Hammer Curls",
            sets: 3,
            reps: "12",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Keep palms facing each other throughout the curl.",
            trainerTip: "Builds forearms and brachialis for arm thickness."
          }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Lower Body B - Hamstrings & Glutes",
        focus: "Posterior Chain, Quads & Abs",
        exercises: [
          {
            name: "Barbell Conventional Deadlift",
            sets: 3,
            reps: "5",
            rest: "150 sec",
            equipment: "Barbell",
            instructions: "Drive through feet to pull weight off floor in one fluid movement.",
            trainerTip: "Pull slack out of bar before lifting off the ground."
          },
          {
            name: "Bulgarian Split Squat",
            sets: 3,
            reps: "10 per leg",
            rest: "75 sec",
            equipment: "Bench, Dumbbells",
            instructions: "Rear foot elevated on bench. Lower hip until front thigh is parallel.",
            trainerTip: "Lean slightly forward to target glutes effectively."
          },
          {
            name: "Leg Extension Machine",
            sets: 3,
            reps: "15",
            rest: "60 sec",
            equipment: "Leg Extension Machine",
            instructions: "Extend legs fully and hold quad peak contraction for 1 sec.",
            trainerTip: "Keep lower back flat against seat."
          },
          {
            name: "Cable Ab Crunch",
            sets: 4,
            reps: "15-20",
            rest: "45 sec",
            equipment: "Rope Cable",
            instructions: "Kneel down, curl ribcage toward pelvis using abdominal strength.",
            trainerTip: "Do not pull with your arms; flex your spine."
          }
        ]
      }
    ]
  },
  {
    id: "advanced-shred",
    title: "Advanced Push / Pull / Legs Shred",
    level: "Advanced",
    frequency: "5-6 Days / Week",
    split: "PPL (Push - Pull - Legs)",
    duration: "75-90 Mins",
    intensity: "High Intensity",
    goal: "Maximum Muscle Definition & Density",
    equipment: "Full Commercial Gym",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
    description: "Intense, high-volume conditioning program for experienced lifters. Utilizes drop sets, supersets, and high frequency targeting peak vascularity, maximum hypertrophy, and body fat reduction.",
    days: [
      {
        dayNumber: 1,
        dayTitle: "Push Day — Chest, Shoulders & Triceps",
        focus: "Chest Upper & Lower, Front/Side Delts, Triceps",
        exercises: [
          {
            name: "Heavy Barbell Bench Press",
            sets: 4,
            reps: "6, 6, 8, 10",
            rest: "120 sec",
            equipment: "Barbell",
            instructions: "Pyramid weight up on initial sets.",
            trainerTip: "Explosive concentric phase, controlled 2 sec descent."
          },
          {
            name: "Incline Dumbbell Press",
            sets: 4,
            reps: "10-12",
            rest: "90 sec",
            equipment: "Dumbbells",
            instructions: "Set bench to 30 degrees. Focus on upper chest squeeze.",
            trainerTip: "Last set includes a 5-second pause rep at the bottom."
          },
          {
            name: "Dumbbell Overhead Shoulder Press",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Dumbbells",
            instructions: "Heavy seated press targeting anterior deltoids.",
            trainerTip: "Control descent; don't bounce off shoulders."
          },
          {
            name: "Dumbbell Lateral Raise (Drop Set)",
            sets: 4,
            reps: "12 + 10 (Drop)",
            rest: "60 sec",
            equipment: "Dumbbells",
            instructions: "Perform set to failure, drop weight by 30%, continue immediately.",
            trainerTip: "Strict isolation — no body swinging."
          },
          {
            name: "Weighted Chest Dips",
            sets: 3,
            reps: "10-12",
            rest: "75 sec",
            equipment: "Dip Station, Belt",
            instructions: "Lean forward to shift tension onto lower chest.",
            trainerTip: "Lower until upper arms are parallel with bars."
          },
          {
            name: "Overhead Dumbbell Tricep Extension",
            sets: 3,
            reps: "12-15",
            rest: "60 sec",
            equipment: "Single Dumbbell",
            instructions: "Lower dumbbell behind head, extend overhead.",
            trainerTip: "Stretches long head of triceps for arm thickness."
          }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Pull Day — Back, Traps & Biceps",
        focus: "Lats, Rhomboids, Rear Delts, Biceps",
        exercises: [
          {
            name: "Conventional Barbell Deadlift",
            sets: 4,
            reps: "5, 5, 3, 3",
            rest: "180 sec",
            equipment: "Barbell",
            instructions: "Heavy compound pull building thick back density.",
            trainerTip: "Reset between reps; avoid touch-and-go bouncing."
          },
          {
            name: "Weighted Pull-ups",
            sets: 4,
            reps: "8-10",
            rest: "90 sec",
            equipment: "Pull-up Bar, Weight Belt",
            instructions: "Full extension at bottom, pull chin over bar.",
            trainerTip: "Pause 1 sec at top of each rep."
          },
          {
            name: "T-Bar Row",
            sets: 4,
            reps: "10-12",
            rest: "75 sec",
            equipment: "T-Bar Landmine",
            instructions: "Row handle into lower chest, contracting middle back.",
            trainerTip: "Keep knees bent and lower back flat."
          },
          {
            name: "Reverse Cable Fly (Rear Delts)",
            sets: 4,
            reps: "15",
            rest: "45 sec",
            equipment: "Cable Crossover",
            instructions: "Pull cables across body focusing on rear shoulder heads.",
            trainerTip: "Do not pull with traps; focus on rear delts."
          },
          {
            name: "Incline Dumbbell Bicep Curl",
            sets: 3,
            reps: "12",
            rest: "60 sec",
            equipment: "Dumbbells, Incline Bench",
            instructions: "Sit back on incline bench, curl dumbbells with full arm stretch.",
            trainerTip: "Eliminates all momentum for pure biceps isolation."
          }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Legs Day — Quad, Hamstring & Calves Destroyer",
        focus: "Quads, Hamstrings, Glutes & Calves",
        exercises: [
          {
            name: "Barbell Front Squat or High Bar Back Squat",
            sets: 4,
            reps: "8-10",
            rest: "120 sec",
            equipment: "Barbell, Squat Rack",
            instructions: "Deep squat emphasizing quad sweep.",
            trainerTip: "Keep torso upright."
          },
          {
            name: "Leg Press (Heavy)",
            sets: 4,
            reps: "12, 10, 8, 15",
            rest: "90 sec",
            equipment: "Leg Press Machine",
            instructions: "Increase weight on initial sets, finish with 15-rep burn set.",
            trainerTip: "Keep feet mid-platform shoulder width."
          },
          {
            name: "Lying Leg Curl",
            sets: 4,
            reps: "12-15",
            rest: "60 sec",
            equipment: "Leg Curl Machine",
            instructions: "Curl weight toward glutes, 3-sec negative return.",
            trainerTip: "Keep hips pressed flat into pad."
          },
          {
            name: "Barbell Hip Thrust",
            sets: 3,
            reps: "10-12",
            rest: "90 sec",
            equipment: "Barbell, Bench",
            instructions: "Drive hips up, squeeze glutes hard for 2 sec at top.",
            trainerTip: "Tuck chin into chest at lock out."
          },
          {
            name: "Standing & Seated Calf Raise Superset",
            sets: 4,
            reps: "15 Standing + 15 Seated",
            rest: "60 sec",
            equipment: "Calf Machines",
            instructions: "Perform standing calf raises, immediately transition to seated.",
            trainerTip: "Unforgiving calf pump!"
          }
        ]
      }
    ]
  }
];
