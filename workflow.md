# 🧠 SmartBite – Intelligent Meal Decision Assistant

## 📌 Project Overview
SmartBite is a smart web-based application designed to help users make better food choices in real-time.  
Instead of tracking past meals, the system focuses on instant decision-making based on user context such as goal, hunger level, and time of day.

The application simulates an AI-powered assistant using logical rules and contextual inputs to provide:
- Smart meal recommendations
- Health reasoning
- Alternative suggestions
- Visual feedback (Guilt Meter)

---

## 🎯 Problem Statement
Many individuals struggle with deciding what to eat due to hunger, cravings, time constraints, and lifestyle factors.  
Most existing applications focus on tracking food intake rather than helping users make real-time decisions.

---

## 💡 Solution
SmartBite provides real-time intelligent food suggestions by analyzing:
- User goals
- Hunger level
- Time of day

It delivers:
- Immediate recommendations
- Health-based reasoning
- Better alternatives (Smart Swap)
- Behavioral awareness (Guilt Meter)

---

## 🧩 Core Features

### 1. 👤 User Input Module
Users provide context through a simple interface:

- Goal:
  - Weight Loss
  - Muscle Gain
  - Maintain

- Hunger Level:
  - Low
  - Medium
  - High
  - Craving

- Time of Day:
  - Morning
  - Afternoon
  - Night

---

### 2. 🧠 Decision Engine (Rule-Based AI Simulation)
The core logic engine processes inputs using conditional rules.

Example:
IF goal = weight_loss AND hunger = craving AND time = night  
→ Suggest: Light, low-calorie meal

Decision factors:
- Goal priority
- Time-based digestion suitability
- Hunger intensity
- Craving control

---

### 3. 🍽️ Smart Recommendation System

The system generates structured output:

- Suggested Meal  
  Primary food recommendation based on context

- Reason  
  Explanation of why the meal was selected

- Health Score (0–10)  
  Based on protein, oil, calories, and sugar

- Smart Swap  
  Alternative healthier option

---

### 4. 😄 Guilt Meter
A visual indicator showing how unhealthy the craving is versus how healthy the suggestion is.

Example:
Craving: 🔴🔴🔴🔴⚪  
Suggestion: 🟢🟢🟢🟢⚪

---

### 5. 🤖 "Why This?" Feature
Provides AI-like reasoning for the recommendation.

Example:
Based on your goal of weight loss and night time, this meal is light, low in calories, and easy to digest.

---

### 6. ⏰ Time-Aware Logic

Morning:
- Heavy meals allowed

Afternoon:
- Balanced meals

Night:
- Light, low-calorie meals

---

## 🧱 System Architecture

Frontend:
- HTML5
- Tailwind CSS
- JavaScript

Backend:
- Not required (Demo version)

Data:
- Static rule-based logic

---

## 🔄 Application Flow

1. User opens the application  
2. Selects goal, hunger level, and time  
3. Clicks "Suggest Food"  
4. System processes input using logic  
5. Displays:
   - Meal
   - Reason
   - Health score
   - Smart swap
   - Guilt meter  
6. User can click "Why This?" for explanation  

---

## 🧪 Testing Scenarios

1. Weight Loss + Night + Craving → Light healthy meal  
2. Muscle Gain + Morning + High Hunger → High protein meal  
3. Maintain + Low Hunger → Balanced snack  
4. Craving Junk → Healthy alternative  

---

## ⚡ Performance
- Fast loading (no backend)
- Instant results
- Lightweight frontend

---

## 🔐 Security
- No sensitive data stored
- No external API usage

---

## ♿ Accessibility
- Simple UI
- Large buttons
- Readable text
- Minimal steps

---

## 🧹 Code Quality
- Clean structure
- Modular JavaScript
- Reusable logic
- Proper naming conventions

---

## 🔗 Future Enhancements
- Firebase integration
- AI-based recommendations
- Food image recognition
- Personalized user data
- Google Maps for nearby healthy food

---

## 🏁 Conclusion
SmartBite demonstrates how simple logic and contextual inputs can simulate intelligent decision-making and help users make healthier food choices in real-time.