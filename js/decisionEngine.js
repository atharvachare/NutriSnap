/**
 * NutriSnap Decision Engine - India Edition (Dietary Preferences)
 */

const MEAL_DATABASE = {
  veg: {
    weight_loss: {
      morning: {
        low: { suggested_meal: "Moong Dal Chilla", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Light protein, low calorie.", health_score: 9.5, smart_swap: "No-oil spray", craving_level: 2, healthy_choice_level: 9, macros: { cal: 180, pro: 8, carb: 25, fiber: 6, fat: 3, sod: 120 } },
        medium: { suggested_meal: "Vegetable Poha", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Easy digestion, moderate energy.", health_score: 8.8, smart_swap: "More veggies, less rice", craving_level: 3, healthy_choice_level: 8, macros: { cal: 240, pro: 5, carb: 45, fiber: 4, fat: 6, sod: 210 } },
        high: { suggested_meal: "Oats Upma", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Fiber-rich oats for satiety.", health_score: 9.0, smart_swap: "Add carrots & peas", craving_level: 4, healthy_choice_level: 9, macros: { cal: 280, pro: 9, carb: 40, fiber: 8, fat: 5, sod: 180 } },
        craving: { suggested_meal: "Paneer Stuffed Besan Chilla", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Satisfies savory carving with protein.", health_score: 8.5, smart_swap: "Low-fat paneer", craving_level: 8, healthy_choice_level: 8, macros: { cal: 320, pro: 15, carb: 30, fiber: 5, fat: 12, sod: 240 } }
      },
      afternoon: {
        low: { suggested_meal: "Sprouts Salad", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400", reason: "Zero oil, high protein.", health_score: 9.8, smart_swap: "Pomegranate for crunch", craving_level: 2, healthy_choice_level: 10, macros: { cal: 150, pro: 10, carb: 20, fiber: 7, fat: 2, sod: 90 } },
        medium: { suggested_meal: "Dal Tadka & 1 Multigrain Roti", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Classic balanced comfort.", health_score: 8.5, smart_swap: "Yellow moong dal", craving_level: 4, healthy_choice_level: 8, macros: { cal: 340, pro: 14, carb: 55, fiber: 9, fat: 8, sod: 320 } },
        high: { suggested_meal: "Soya Chunk Curry & Cucumber Salad", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "High protein, fiber-rich.", health_score: 9.2, smart_swap: "Curd-based gravy", craving_level: 5, healthy_choice_level: 9, macros: { cal: 310, pro: 22, carb: 35, fiber: 10, fat: 7, sod: 280 } },
        craving: { suggested_meal: "Mushroom Matar (Low Oil)", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400", reason: "Flavorful and low calorie.", health_score: 8.2, smart_swap: "Whole wheat chapati", craving_level: 9, healthy_choice_level: 7, macros: { cal: 290, pro: 11, carb: 45, fiber: 6, fat: 9, sod: 350 } }
      },
      night: {
        low: { suggested_meal: "Clear Vegetable Soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400", reason: "Hydrating, ultra-light.", health_score: 9.5, smart_swap: "Ginger-garlic boost", craving_level: 3, healthy_choice_level: 9, macros: { cal: 120, pro: 4, carb: 18, fiber: 5, fat: 2, sod: 410 } },
        medium: { suggested_meal: "Lauki Sabzi & 1 Roti", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Easy on digestion.", health_score: 9.0, smart_swap: "Minimal spices", craving_level: 4, healthy_choice_level: 9, macros: { cal: 220, pro: 8, carb: 35, fiber: 7, fat: 4, sod: 220 } },
        high: { suggested_meal: "Paneer Tikka (Grilled)", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Low carb, high protein.", health_score: 9.3, smart_swap: "Mint chutney", craving_level: 5, healthy_choice_level: 9, macros: { cal: 280, pro: 18, carb: 10, fiber: 3, fat: 16, sod: 380 } },
        craving: { suggested_meal: "Roasted Makhana & Chaas", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Crispy snack-style meal.", health_score: 9.0, smart_swap: "Rock salt seasoning", craving_level: 9, healthy_choice_level: 9, macros: { cal: 200, pro: 6, carb: 30, fiber: 4, fat: 5, sod: 450 } }
      }
    },
    muscle_gain: {
      morning: {
        low: { suggested_meal: "Peanut Butter & Banana Toast", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=400", reason: "Energy-dense fuel.", health_score: 8.0, smart_swap: "Organic PB", craving_level: 3, healthy_choice_level: 7, macros: { cal: 380, pro: 12, carb: 55, fiber: 6, fat: 14, sod: 180 } },
        medium: { suggested_meal: "Paneer Bhurji & Brown Bread", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "High-quality veg protein.", health_score: 8.5, smart_swap: "Extra veggies", craving_level: 4, healthy_choice_level: 8, macros: { cal: 420, pro: 22, carb: 40, fiber: 5, fat: 18, sod: 310 } },
        high: { suggested_meal: "Paneer Paratha & Curd", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Traditional muscle fuel.", health_score: 7.5, smart_swap: "Spinach in dough", craving_level: 5, healthy_choice_level: 7, macros: { cal: 550, pro: 18, carb: 65, fiber: 7, fat: 24, sod: 420 } },
        craving: { suggested_meal: "Chole with Whole Wheat Kulcha", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Satisfaction with protein.", health_score: 6.5, smart_swap: "Baked Kulcha", craving_level: 9, healthy_choice_level: 4, macros: { cal: 480, pro: 16, carb: 75, fiber: 12, fat: 12, sod: 550 } }
      },
      afternoon: {
        low: { suggested_meal: "Mixed Bean Salad", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400", reason: "Pure fiber and protein.", health_score: 9.0, smart_swap: "Lemon-vinegar dressing", craving_level: 3, healthy_choice_level: 9, macros: { cal: 320, pro: 18, carb: 45, fiber: 14, fat: 6, sod: 240 } },
        medium: { suggested_meal: "Rajma Chawal & Salad", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Quintessential veg mass-builder.", health_score: 8.8, smart_swap: "1:1 Rajma/Rice ratio", craving_level: 4, healthy_choice_level: 8, macros: { cal: 450, pro: 16, carb: 80, fiber: 15, fat: 8, sod: 380 } },
        high: { suggested_meal: "Paneer Butter Masala (Healthy version) & Roti", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Energy-dense mass meal.", health_score: 7.0, smart_swap: "Swap cream for curd", craving_level: 6, healthy_choice_level: 6, macros: { cal: 580, pro: 22, carb: 50, fiber: 6, fat: 32, sod: 620 } },
        craving: { suggested_meal: "Soya Chunk Biryani & Raita", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Deeply satisfying high-protein rice.", health_score: 7.2, smart_swap: "Long-grain basmati", craving_level: 10, healthy_choice_level: 5, macros: { cal: 520, pro: 25, carb: 75, fiber: 8, fat: 14, sod: 580 } }
      },
      night: {
        low: { suggested_meal: "Raw Paneer with Black Pepper", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Casein protein for recovery.", health_score: 9.0, smart_swap: "Fresh malai-free paneer", craving_level: 4, healthy_choice_level: 9, macros: { cal: 250, pro: 18, carb: 5, fiber: 0, fat: 18, sod: 40 } },
        medium: { suggested_meal: "Tofu Stir-fry with Broccoli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400", reason: "Plant-based recovery.", health_score: 9.2, smart_swap: "Sesame oil hint", craving_level: 5, healthy_choice_level: 9, macros: { cal: 320, pro: 24, carb: 20, fiber: 7, fat: 14, sod: 290 } },
        high: { suggested_meal: "Mixed Lentil Khichdi", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Fulfilling and mineral-rich.", health_score: 8.5, smart_swap: "Add extra spinach", craving_level: 6, healthy_choice_level: 8, macros: { cal: 380, pro: 16, carb: 65, fiber: 10, fat: 6, sod: 340 } },
        craving: { suggested_meal: "Dalia with Milk & Jaggery", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Sweet finish with nutrients.", health_score: 8.5, smart_swap: "Almond milk for lightness", craving_level: 8, healthy_choice_level: 8, macros: { cal: 340, pro: 10, carb: 60, fiber: 6, fat: 8, sod: 110 } }
      }
    },
    maintain: {
        morning: {
            low: { suggested_meal: "Idli Sambar", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400", reason: "Gut-friendly, fermented.", health_score: 9.0, smart_swap: "Ragi Idli", craving_level: 3, healthy_choice_level: 9, macros: { cal: 220, pro: 7, carb: 42, fiber: 5, fat: 3, sod: 380 } },
            medium: { suggested_meal: "Veg Vermicelli", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Light energy.", health_score: 8.0, smart_swap: "Whole wheat seviyan", craving_level: 4, healthy_choice_level: 8, macros: { cal: 280, pro: 8, carb: 55, fiber: 4, fat: 4, sod: 410 } },
            high: { suggested_meal: "Stuffed Methi Paratha", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Fiber and energy.", health_score: 7.5, smart_swap: "Less oil, more curd", craving_level: 5, healthy_choice_level: 7, macros: { cal: 340, pro: 9, carb: 48, fiber: 8, fat: 12, sod: 290 } },
            craving: { suggested_meal: "Misal Pav (No-sev)", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Flavorful sprouts.", health_score: 7.0, smart_swap: "Multigrain pav", craving_level: 9, healthy_choice_level: 6, macros: { cal: 380, pro: 14, carb: 60, fiber: 9, fat: 10, sod: 520 } }
        },
        afternoon: {
            low: { suggested_meal: "Roasted Chana & Chaas", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Cooling and high protein.", health_score: 9.5, smart_swap: "Roasted cumin", craving_level: 3, healthy_choice_level: 10, macros: { cal: 180, pro: 11, carb: 24, fiber: 6, fat: 4, sod: 320 } },
            medium: { suggested_meal: "Veg Thali (Dal, Sabzi, 2 Roti)", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Culturally balanced.", health_score: 8.8, smart_swap: "Brown rice option", craving_level: 4, healthy_choice_level: 9, macros: { cal: 480, pro: 15, carb: 75, fiber: 12, fat: 12, sod: 450 } },
            high: { suggested_meal: "Paneer Kathi Roll (Wheat)", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Fulfilling and portable.", health_score: 7.5, smart_swap: "Swap mayo for chutney", craving_level: 10, healthy_choice_level: 7, macros: { cal: 420, pro: 16, carb: 55, fiber: 6, fat: 16, sod: 510 } },
            craving: { suggested_meal: "Veg Burger with Sweet Potato Fries", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400", reason: "Comfort with fiber.", health_score: 6.5, smart_swap: "Lettuce wrap", craving_level: 10, healthy_choice_level: 4, macros: { cal: 520, pro: 12, carb: 68, fiber: 10, fat: 22, sod: 680 } }
        },
        night: {
            low: { suggested_meal: "Papaya Salad", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400", reason: "Enzymes for digestion.", health_score: 9.0, smart_swap: "Lime & chaat masala", craving_level: 4, healthy_choice_level: 9, macros: { cal: 140, pro: 2, carb: 32, fiber: 6, fat: 1, sod: 80 } },
            medium: { suggested_meal: "Bajra Khichdi", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Earthly nutrition.", health_score: 9.5, smart_swap: "Half spoon ghee", craving_level: 5, healthy_choice_level: 9, macros: { cal: 290, pro: 9, carb: 52, fiber: 9, fat: 6, sod: 240 } },
            high: { suggested_meal: "Mixed Veg Curry & Roti", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Satisfying finish.", health_score: 8.5, smart_swap: "Seasonal veggies", craving_level: 6, healthy_choice_level: 8, macros: { cal: 360, pro: 10, carb: 55, fiber: 11, fat: 12, sod: 380 } },
            craving: { suggested_meal: "Warm Turmeric Milk & 2 Almonds", image: "https://images.unsplash.com/photo-1544210001-5058e3ed38c6?auto=format&fit=crop&q=80&w=400", reason: "Healing and cozy.", health_score: 9.0, smart_swap: "No sugar added", craving_level: 9, healthy_choice_level: 9, macros: { cal: 180, pro: 8, carb: 18, fiber: 1, fat: 9, sod: 95 } }
        }
    }
  },
  non_veg: {
    weight_loss: {
      morning: {
        low: { suggested_meal: "Egg White Omelette", image: "https://images.unsplash.com/photo-1510693240201-90407a97268d?auto=format&fit=crop&q=80&w=400", reason: "Pure protein, low fat.", health_score: 9.6, smart_swap: "Chilli & onion for flavor", craving_level: 2, healthy_choice_level: 10, macros: { cal: 140, pro: 18, carb: 4, fiber: 1, fat: 3, sod: 290 } },
        medium: { suggested_meal: "Boiled Eggs (2) & Multigrain Toast", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Balanced and filling.", health_score: 9.0, smart_swap: "Discard one yolk", craving_level: 3, healthy_choice_level: 9, macros: { cal: 260, pro: 16, carb: 28, fiber: 4, fat: 9, sod: 310 } },
        high: { suggested_meal: "Chicken Sausages & Sautéed Veggies", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Lean protein energy.", health_score: 8.2, smart_swap: "Grill, don't fry", craving_level: 4, healthy_choice_level: 8, macros: { cal: 320, pro: 18, carb: 10, fiber: 4, fat: 22, sod: 650 } },
        craving: { suggested_meal: "Chicken Stuffed Paratha (No oil)", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Savory and satisfying.", health_score: 8.0, smart_swap: "Air-fried", craving_level: 9, healthy_choice_level: 6, macros: { cal: 380, pro: 22, carb: 45, fiber: 6, fat: 12, sod: 410 } }
      },
      afternoon: {
        low: { suggested_meal: "Tuna Salad (Water-based)", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400", reason: "Ultra-lean muscle support.", health_score: 9.5, smart_swap: "Vinegar dressing", craving_level: 3, healthy_choice_level: 9, macros: { cal: 180, pro: 35, carb: 5, fiber: 2, fat: 2, sod: 480 } },
        medium: { suggested_meal: "Grilled Chicken & Steamed Beans", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400", reason: "Classic lean performance.", health_score: 9.2, smart_swap: "Lemon-pepper seasoning", craving_level: 4, healthy_choice_level: 9, macros: { cal: 280, pro: 38, carb: 12, fiber: 6, fat: 6, sod: 340 } },
        high: { suggested_meal: "Fish Curry & Small portion of Rice", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400", reason: "Healthy fats & protein.", health_score: 8.5, smart_swap: "Mustard gravy", craving_level: 5, healthy_choice_level: 8, macros: { cal: 420, pro: 32, carb: 45, fiber: 3, fat: 12, sod: 520 } },
        craving: { suggested_meal: "Chicken Caesar Salad (No croutons)", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400", reason: "Crunchy and satisfying.", health_score: 8.0, smart_swap: "Greek yogurt dressing", craving_level: 9, healthy_choice_level: 7, macros: { cal: 350, pro: 28, carb: 15, fiber: 4, fat: 18, sod: 680 } }
      },
      night: {
        low: { suggested_meal: "Clear Chicken Soup", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400", reason: "Warm and easy to digest.", health_score: 9.7, smart_swap: "Add bok choy", craving_level: 3, healthy_choice_level: 9, macros: { cal: 160, pro: 22, carb: 8, fiber: 2, fat: 4, sod: 550 } },
        medium: { suggested_meal: "Tandoori Chicken (2 pieces) & Mint Chutney", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=400", reason: "Pure flame-grilled protein.", health_score: 9.3, smart_swap: "Remove chicken skin", craving_level: 4, healthy_choice_level: 9, macros: { cal: 310, pro: 42, carb: 6, fiber: 1, fat: 14, sod: 480 } },
        high: { suggested_meal: "Grilled Fish & Asparagus", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400", reason: "Perfect overnight recovery.", health_score: 9.4, smart_swap: "Sea salt & garlic", craving_level: 5, healthy_choice_level: 9, macros: { cal: 290, pro: 34, carb: 8, fiber: 4, fat: 12, sod: 320 } },
        craving: { suggested_meal: "Boiled Egg Bhurji (Low Spice)", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Simple yet fulfilling.", health_score: 8.8, smart_swap: "Zero butter", craving_level: 9, healthy_choice_level: 8, macros: { cal: 240, pro: 18, carb: 6, fiber: 2, fat: 16, sod: 410 } }
      }
    },
    muscle_gain: {
      morning: {
        low: { suggested_meal: "Egg Bhurji & Fruit", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Quick protein & carbs.", health_score: 8.5, smart_swap: "Add spinach", craving_level: 3, healthy_choice_level: 8, macros: { cal: 350, pro: 22, carb: 35, fiber: 4, fat: 14, sod: 380 } },
        medium: { suggested_meal: "3 Eggs & Oats Pancake", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "High-performance fuel.", health_score: 8.8, smart_swap: "Raw honey hint", craving_level: 4, healthy_choice_level: 9, macros: { cal: 520, pro: 28, carb: 65, fiber: 8, fat: 16, sod: 310 } },
        high: { suggested_meal: "Chicken Kheema & Pav", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Energy-dense and high protein.", health_score: 7.8, smart_swap: "Multigrain pav", craving_level: 6, healthy_choice_level: 7, macros: { cal: 580, pro: 35, carb: 55, fiber: 6, fat: 22, sod: 650 } },
        craving: { suggested_meal: "Steak and Eggs", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=400", reason: "Creatine-rich muscle fuel.", health_score: 7.0, smart_swap: "Lean cut of meat", craving_level: 10, healthy_choice_level: 5, macros: { cal: 720, pro: 55, carb: 5, fiber: 0, fat: 50, sod: 420 } }
      },
      afternoon: {
        low: { suggested_meal: "Grilled Prawns & Salad", image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=400", reason: "Low calorie, high iodine.", health_score: 9.0, smart_swap: "Garlic-lime zest", craving_level: 4, healthy_choice_level: 8, macros: { cal: 280, pro: 42, carb: 10, fiber: 4, fat: 6, sod: 550 } },
        medium: { suggested_meal: "Chicken Breast, Brown Rice & Broccoli", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "The gold standard mass meal.", health_score: 9.5, smart_swap: "Olive oil finish", craving_level: 4, healthy_choice_level: 9, macros: { cal: 620, pro: 52, carb: 75, fiber: 12, fat: 12, sod: 320 } },
        high: { suggested_meal: "Mutton Curry & 2 Rotis", image: "https://images.unsplash.com/photo-1544352127-796fb387088b?auto=format&fit=crop&q=80&w=400", reason: "Fulfilling and rich in iron.", health_score: 7.2, smart_swap: "Pressure cooked for tenderness", craving_level: 6, healthy_choice_level: 7, macros: { cal: 750, pro: 48, carb: 60, fiber: 8, fat: 38, sod: 720 } },
        craving: { suggested_meal: "Chicken Biryani (Large portion)", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Deeply satisfying and providing a good balance of macros.", health_score: 7.2, smart_swap: "Extra piece of chicken, less rice", craving_level: 10, healthy_choice_level: 5, macros: { cal: 850, pro: 45, carb: 110, fiber: 8, fat: 28, sod: 950 } }
      },
      night: {
        low: { suggested_meal: "Casein Protein or 2 Boiled Egg Whites", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Anti-catabolic support.", health_score: 9.0, smart_swap: "Sip warm water", craving_level: 4, healthy_choice_level: 9, macros: { cal: 150, pro: 28, carb: 2, fiber: 0, fat: 1, sod: 180 } },
        medium: { suggested_meal: "Grilled Rawas (Salmon) & Rice", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400", reason: "Omega-3 dense recovery.", health_score: 9.2, smart_swap: "Turmeric rub", craving_level: 5, healthy_choice_level: 9, macros: { cal: 550, pro: 38, carb: 45, fiber: 2, fat: 24, sod: 290 } },
        high: { suggested_meal: "Chicken Stew with Vegetables", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400", reason: "Easily absorbable nutrients.", health_score: 8.9, smart_swap: "Use local free-range chicken", craving_level: 6, healthy_choice_level: 8, macros: { cal: 480, pro: 42, carb: 35, fiber: 8, fat: 14, sod: 520 } },
        craving: { suggested_meal: "Omelette with Cheese & Turkey", image: "https://images.unsplash.com/photo-1510693240201-90407a97268d?auto=format&fit=crop&q=80&w=400", reason: "Rich finish with high protein.", health_score: 7.5, smart_swap: "Low-fat cheese", craving_level: 9, healthy_choice_level: 6, macros: { cal: 520, pro: 38, carb: 8, fiber: 2, fat: 38, sod: 610 } }
      }
    },
    maintain: {
        morning: {
            low: { suggested_meal: "Egg White Idli", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=400", reason: "Unique high-protein twist.", health_score: 9.2, smart_swap: "Ginger chutney", craving_level: 3, healthy_choice_level: 9, macros: { cal: 210, pro: 14, carb: 35, fiber: 4, fat: 2, sod: 340 } },
            medium: { suggested_meal: "Chicken Sandwich (Wheat)", image: "https://images.unsplash.com/photo-1567234661003-2475ca29d750?auto=format&fit=crop&q=80&w=400", reason: "Balanced snack meal.", health_score: 8.2, smart_swap: "No mayo, use avocado", craving_level: 4, healthy_choice_level: 8, macros: { cal: 380, pro: 24, carb: 45, fiber: 6, fat: 12, sod: 580 } },
            high: { suggested_meal: "Egg Paratha & Curd", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Traditional satisfying fuel.", health_score: 7.2, smart_swap: "Whole wheat", craving_level: 5, healthy_choice_level: 7, macros: { cal: 450, pro: 18, carb: 55, fiber: 5, fat: 18, sod: 420 } },
            craving: { suggested_meal: "Keema Pav", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Spicy and protein-rich.", health_score: 6.8, smart_swap: "Lean mince", craving_level: 9, healthy_choice_level: 6, macros: { cal: 520, pro: 32, carb: 48, fiber: 6, fat: 22, sod: 780 } }
        },
        afternoon: {
            low: { suggested_meal: "Tandoori Chicken Salad", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=400", reason: "Light and flavorful.", health_score: 9.4, smart_swap: "Vinegar sprig", craving_level: 3, healthy_choice_level: 9, macros: { cal: 240, pro: 32, carb: 10, fiber: 4, fat: 8, sod: 410 } },
            medium: { suggested_meal: "Fish Thali", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400", reason: "Complete nutritional profile.", health_score: 8.5, smart_swap: "Brown rice option", craving_level: 4, healthy_choice_level: 8, macros: { cal: 580, pro: 35, carb: 70, fiber: 10, fat: 18, sod: 650 } },
            high: { suggested_meal: "Chicken Pasta (Wheat)", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400", reason: "Fulfilling energy.", health_score: 7.5, smart_swap: "Tomato-based sauce", craving_level: 10, healthy_choice_level: 7, macros: { cal: 520, pro: 28, carb: 80, fiber: 9, fat: 12, sod: 480 } },
            craving: { suggested_meal: "Chicken Burger (Grilled)", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400", reason: "Satisfying with protein.", health_score: 7.0, smart_swap: "Whole wheat bun", craving_level: 10, healthy_choice_level: 6, macros: { cal: 550, pro: 32, carb: 55, fiber: 6, fat: 24, sod: 820 } }
        },
        night: {
            low: { suggested_meal: "1 Boiled Egg", image: "https://images.unsplash.com/photo-1582169542910-6c0a5bd9cddf?auto=format&fit=crop&q=80&w=400", reason: "Simple and anti-bloat.", health_score: 9.5, smart_swap: "Black pepper", craving_level: 4, healthy_choice_level: 10, macros: { cal: 70, pro: 6, carb: 1, fiber: 0, fat: 5, sod: 70 } },
            medium: { suggested_meal: "Chicken & Veggie Skewers", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400", reason: "Light and fun dinner.", health_score: 9.2, smart_swap: "Olive oil brush", craving_level: 5, healthy_choice_level: 9, macros: { cal: 320, pro: 38, carb: 15, fiber: 6, fat: 12, sod: 340 } },
            high: { suggested_meal: "Fish Curry & 1 Roti", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400", reason: "Satisfying finish.", health_score: 8.8, smart_swap: "Cumin rice if no roti", craving_level: 6, healthy_choice_level: 8, macros: { cal: 410, pro: 28, carb: 45, fiber: 6, fat: 14, sod: 520 } },
            craving: { suggested_meal: "Creamy Chicken Soup (Healthy)", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400", reason: "Cozy and comforting.", health_score: 8.0, smart_swap: "Use milk instead of cream", craving_level: 9, healthy_choice_level: 7, macros: { cal: 280, pro: 22, carb: 20, fiber: 3, fat: 12, sod: 680 } }
        }
    }
  }
};

/**
 * Suggests a meal based on goal, hunger, time, and preference.
 */
function suggestMeal(goal, hunger, time, preference = 'veg') {
  const pref = preference.toLowerCase() === 'non-veg' ? 'non_veg' : 'veg';
  const g = goal.toLowerCase();
  const h = hunger.toLowerCase();
  const t = time.toLowerCase();

  const recommendation = MEAL_DATABASE[pref]?.[g]?.[t]?.[h];

  if (recommendation) {
    return {
      ...recommendation,
      preference: pref,
      why_this: `As a ${preference.toUpperCase()} option for ${g.replace('_', ' ')}, this ${recommendation.suggested_meal} is perfectly tuned for ${t} context and your ${h} hunger levels.`
    };
  }

  return {
    suggested_meal: preference === 'veg' ? "Yellow Moong Dal" : "Grilled Chicken Tikka",
    reason: "A safe, healthy choice for your preference.",
    health_score: 9.0,
    smart_swap: "Add more greens.",
    craving_level: 5,
    healthy_choice_level: 9,
    why_this: "We selected a classic healthy option based on your diet type."
  };
}

if (typeof window !== 'undefined') {
  window.suggestMeal = suggestMeal;
}
