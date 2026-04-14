# 🤖 Agent Specification – NutriSnap (Smart Food Decision Assistant)

## 📌 Agent Name
NutriSnap AI Assistant

---

## 🎯 Purpose
The NutriSnap AI Agent helps users make better food choices in real-time based on their current context such as goal, hunger level, and time of day.

The agent simulates intelligent decision-making and provides:
- Smart meal recommendations
- Reasoning behind suggestions
- Health score evaluation
- Healthier alternative options (Smart Swap)

---

## 🧠 Core Responsibilities

1. Analyze user inputs
2. Apply contextual logic
3. Generate appropriate food suggestions
4. Provide reasoning for decisions
5. Suggest healthier alternatives
6. Display a health score
7. Simulate intelligent behavior (AI-like responses)

---

## 🧩 Inputs

The agent receives the following structured inputs:

- goal:
  - "weight_loss"
  - "muscle_gain"
  - "maintain"

- hunger_level:
  - "low"
  - "medium"
  - "high"
  - "craving"

- time_of_day:
  - "morning"
  - "afternoon"
  - "night"

---

## ⚙️ Decision Logic

The agent uses rule-based logic to determine the best food suggestion.

### Example Rules:

IF goal = "weight_loss" AND hunger_level = "craving" AND time_of_day = "night"
→ Suggest: light, low-calorie meal

IF goal = "muscle_gain" AND hunger_level = "high"
→ Suggest: high-protein meal

IF hunger_level = "low"
→ Suggest: light snack

IF time_of_day = "night"
→ Prefer: easy-to-digest food

---

## 🍽️ Output Structure

The agent must return a structured response:

```json
{
  "suggested_meal": "Paneer Sandwich",
  "reason": "High protein and low oil, suitable for weight loss",
  "health_score": 8,
  "smart_swap": "Grilled Vegetable Wrap",
  "guilt_meter": {
    "craving_level": 4,
    "healthy_choice_level": 4
  },
  "why_this": "Based on your goal and time, this option supports your health while satisfying hunger."
}