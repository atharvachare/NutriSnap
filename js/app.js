/**
 * NutriSnap Premium - Application Logic (Light Mode Refactored)
 */

// Application State
const state = {
  goal: 'muscle_gain', // Default as per UI screenshot
  hungerPercent: 70, // Slider value (0-100)
  hungerLevel: 'high',
  time: 'afternoon',
  diet: 'veg',
  history: JSON.parse(localStorage.getItem('nutrisnap_history') || '[]')
};

// DOM Elements
const elements = {
  home: document.getElementById('state-home'),
  loading: document.getElementById('state-loading'),
  result: document.getElementById('state-result'),
  mealplans: document.getElementById('state-mealplans'),
  insights: document.getElementById('state-insights'),
  snapBtn: document.getElementById('snap-meal-btn'),
  goalBtns: document.querySelectorAll('#goal-selector .selector-btn'),
  dietBtns: document.querySelectorAll('#diet-selector button'),
  hungerSlider: document.getElementById('hunger-slider'),
  hungerVal: document.getElementById('hunger-val'),
  recentSnapsMini: document.getElementById('recent-snaps-mini'),
  navLinks: document.querySelectorAll('.nav-link'),
  insightsHistoryFeed: document.getElementById('insights-history-feed'),
  
  // History Elements
  historyModal: document.getElementById('history-modal'),
  historyList: document.getElementById('history-list'),

  // Result details
  mealName: document.getElementById('result-meal-name'),
  mealReason: document.getElementById('result-meal-reason'),
  mealImage: document.getElementById('result-image'),
  smartSwap: document.getElementById('result-smart-swap'),
  healthScoreVal: document.getElementById('health-score-val'),
  healthScoreCircle: document.getElementById('health-score-circle'),
  whyThisPara: document.getElementById('result-why-para'),
  guiltFill: document.getElementById('guilt-fill'),
  swapFill: document.getElementById('swap-fill')
};

/**
 * Initialize the application
 */
function init() {
  setupEventListeners();
  // Set default active states
  setActiveButton(elements.goalBtns, state.goal);
  setActiveButton(elements.dietBtns, state.diet);
  renderRecentSnapsMini();
  updateHungerDisplay(state.hungerPercent);
  
  // Start at login
  showState('login');
}

/**
 * Login Handler
 */
function handleLogin() {
    const user = document.getElementById('login-user').value.toLowerCase();
    const pass = document.getElementById('login-pass').value;
    const errorEl = document.getElementById('login-error');
    
    // Hardcoded credentials: atharva achare / 12345
    if (user === 'atharva achare' && pass === '12345') {
        errorEl.classList.add('hidden');
        document.getElementById('nav-content').classList.remove('hidden');
        showState('home');
    } else {
        errorEl.classList.remove('hidden');
    }
}
window.handleLogin = handleLogin;

const PLANS_DATA = {
    'gut-reset': {
        title: '7-Day Gut Reset',
        tag: 'Recommended Plan',
        desc: 'Focuses on probiotic-rich Indian foods and complex fibers to restore digestive balance and reduce systemic inflammation.',
        pro: '45g', carb: '120g', cal: '1450',
        img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600'
    },
    'muscle-surge': {
        title: 'Lean Muscle Surge',
        tag: 'Active Growth',
        desc: 'Timed protein delivery using high-quality vegetarian and non-vegetarian sources, optimized for post-workout recovery in the Indian climate.',
        pro: '140g', carb: '180g', cal: '2400',
        img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600'
    },
    'zen': {
        title: 'Zen Maintenance',
        tag: 'Equilibrium',
        desc: 'A sustainable approach to Indian home-cooking, balancing traditional grains with modern nutritional science for long-term health.',
        pro: '65g', carb: '150g', cal: '1800',
        img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600'
    }
};

function toggleMealDetail(show) {
    const modal = document.getElementById('meal-detail-modal');
    if (show) modal.classList.remove('hidden');
    else modal.classList.add('hidden');
}

function showMealDetail(planId) {
    const data = PLANS_DATA[planId];
    if (!data) return;
    
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-tag').textContent = data.tag;
    document.getElementById('detail-desc').textContent = data.desc;
    document.getElementById('detail-pro').textContent = data.pro;
    document.getElementById('detail-carb').textContent = data.carb;
    document.getElementById('detail-cal').textContent = data.cal;
    document.getElementById('detail-img').src = data.img;
    
    toggleMealDetail(true);
}

window.toggleMealDetail = toggleMealDetail;
window.showMealDetail = showMealDetail;

/**
 * Update Navbar active state
 */
function updateNav(activeState) {
    elements.navLinks.forEach(link => {
        if (link.dataset.state === activeState) {
            link.classList.add('active', 'text-primary');
            link.classList.remove('text-on-surface-variant');
        } else {
            link.classList.remove('active', 'text-primary');
            link.classList.add('text-on-surface-variant');
        }
    });
}

/**
 * Helper to manage active class on button groups
 */
function setActiveButton(btnGroup, value) {
  btnGroup.forEach(btn => {
    if (btn.dataset.value === value) {
      btn.classList.add('active'); // Ensure compatibility
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Update hunger slider visuals
 */
function updateHungerDisplay(val) {
    state.hungerPercent = val;
    // Map to categories
    if (val <= 25) state.hungerLevel = 'low';
    else if (val <= 50) state.hungerLevel = 'medium';
    else if (val <= 75) state.hungerLevel = 'high';
    else state.hungerLevel = 'craving';

    // Update display text (pad zero)
    elements.hungerVal.textContent = val.toString().padStart(2, '0');
}

/**
 * Set up event listeners
 */
function setupEventListeners() {
  // Goal Selection
  elements.goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.goal = btn.dataset.value;
      setActiveButton(elements.goalBtns, state.goal);
    });
  });

  // Diet Selection
  elements.dietBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.diet = btn.dataset.value;
      setActiveButton(elements.dietBtns, state.diet);
    });
  });

  // Hunger Slider
  elements.hungerSlider.addEventListener('input', (e) => {
    updateHungerDisplay(parseInt(e.target.value));
  });

  // Snap Button
  elements.snapBtn.addEventListener('click', () => {
    processSnap();
  });
}

/**
 * History & Recent Snaps
 */
function toggleHistory(show) {
  if (show) {
    renderHistory();
    elements.historyModal.classList.remove('hidden');
  } else {
    elements.historyModal.classList.add('hidden');
  }
}

function renderRecentSnapsMini() {
    if (!elements.recentSnapsMini) return;
    elements.recentSnapsMini.innerHTML = '';
    const lastThree = state.history.slice(-2); // Show last 2 + Add button
    
    lastThree.forEach(item => {
        const div = document.createElement('div');
        div.className = 'w-16 h-12 rounded-2xl overflow-hidden bg-gray-200 border border-white';
        div.innerHTML = `<img src="assets/hero_meal.png" class="w-full h-full object-cover">`;
        elements.recentSnapsMini.appendChild(div);
    });

    // Plus button
    const plus = document.createElement('div');
    plus.className = 'w-16 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 cursor-pointer hover:bg-gray-50';
    plus.innerHTML = `<span class="material-symbols-outlined">add</span>`;
    plus.onclick = () => showState('home');
    elements.recentSnapsMini.appendChild(plus);
}

function renderHistory() {
  elements.historyList.innerHTML = '';
  if (state.history.length === 0) {
    elements.historyList.innerHTML = `<p class="text-sm text-center text-on-surface-variant py-8">No history yet.</p>`;
    return;
  }

  state.history.slice().reverse().forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'p-6 rounded-3xl bg-gray-50 border border-white space-y-2';
    itemEl.innerHTML = `
      <div class="flex justify-between items-center text-[10px] font-bold text-primary uppercase">
        <span>${item.inputs.goal}</span>
        <span class="text-on-surface-variant font-medium">${new Date(item.timestamp).toLocaleDateString()}</span>
      </div>
      <h4 class="font-bold text-on-surface">${item.suggested_meal}</h4>
    `;
    elements.historyList.appendChild(itemEl);
  });
}

function renderInsightsHistory() {
    if (!elements.insightsHistoryFeed) return;
    elements.insightsHistoryFeed.innerHTML = '';
    
    if (state.history.length === 0) {
        elements.insightsHistoryFeed.innerHTML = `<p class="col-span-full text-center text-on-surface-variant py-10">Generate some meal snaps to see insights.</p>`;
        return;
    }

    state.history.slice().reverse().forEach(item => {
        const div = document.createElement('div');
        div.className = 'bg-white p-6 rounded-4xl border border-gray-100 shadow-sm space-y-4';
        div.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-[8px] font-black uppercase text-primary">${item.inputs.goal}</span>
                <span class="text-[8px] font-bold text-on-surface-variant">${new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
            <h4 class="font-bold text-sm leading-tight">${item.suggested_meal}</h4>
            <div class="flex items-center gap-1">
                 <span class="text-[10px] font-black text-on-surface">${item.health_score}</span>
                 <span class="text-[8px] font-bold text-on-surface-variant uppercase">Index</span>
            </div>
        `;
        elements.insightsHistoryFeed.appendChild(div);
    });
}

/**
 * Transition States
 */
function showState(newState) {
  elements.login = document.getElementById('state-login'); // Map it late or in elements
  
  elements.login.classList.add('hidden');
  elements.home.classList.add('hidden');
  elements.loading.classList.add('hidden');
  elements.result.classList.add('hidden');
  elements.mealplans.classList.add('hidden');
  elements.insights.classList.add('hidden');

  const target = elements[newState];
  if (target) {
    target.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (newState !== 'login') {
        updateNav(newState);
        if (newState === 'insights') renderInsightsHistory();
    }
  }
}

/**
 * Process Meal
 */
function processSnap() {
  showState('loading');
  
  setTimeout(() => {
    const result = window.suggestMeal(state.goal, state.hungerLevel, state.time, state.diet);
    state.currentMeal = result; // Keep track for logging

    // Save to history
    state.history.push({
        ...result,
        timestamp: new Date().toISOString(),
        inputs: { goal: state.goal, hunger: state.hungerLevel, time: state.time, diet: state.diet }
    });
    localStorage.setItem('nutrisnap_history', JSON.stringify(state.history.slice(-10)));

    renderResult(result);
    renderRecentSnapsMini();
    showState('result');
  }, 2000);
}

/**
 * Log Meal to Dashboard
 */
function logMeal() {
    if (!state.currentMeal) return;
    
    const dashCal = document.getElementById('dash-cal');
    const current = parseInt(dashCal.textContent);
    const added = state.currentMeal.macros.cal;
    
    animateValue(dashCal, current, current + added, 1500);
    showState('home');
    
    // Feedback
    alert(`Logged ${state.currentMeal.suggested_meal} (${added} kcal) to your daily dashboard!`);
}

/**
 * Render Result
 */
function renderResult(result) {
  elements.mealName.textContent = result.suggested_meal;
  elements.mealReason.textContent = result.reason;
  elements.mealImage.src = result.image; 
  elements.smartSwap.textContent = result.smart_swap;
  elements.whyThisPara.textContent = result.why_this;
  
  // Update Macros if available
  if (result.macros) {
      document.getElementById('macro-cal').textContent = result.macros.cal;
      document.getElementById('macro-pro').textContent = result.macros.pro;
      document.getElementById('macro-carb').textContent = result.macros.carb;
      document.getElementById('macro-fiber').textContent = result.macros.fiber;
      document.getElementById('macro-fat').textContent = result.macros.fat;
      document.getElementById('macro-sod').textContent = result.macros.sod;
  }

  // Health Score Animate
  animateValue(elements.healthScoreVal, 0, result.health_score, 1000);
  
  // Circle progress (Circumference = 264 for radius 42)
  const circumference = 264;
  const offset = circumference - (result.health_score / 10) * circumference;
  elements.healthScoreCircle.style.strokeDashoffset = offset;
  
  // Fills & Meters
  const total = result.craving_level + result.healthy_choice_level;
  const balancePercent = (result.healthy_choice_level / total) * 100;
  
  elements.guiltFill.style.width = `${100 - balancePercent}%`;
  elements.swapFill.style.width = `${result.health_score * 10}%`;
}

/**
 * Number Animation
 */
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = (progress * (end - start) + start).toFixed(1);
    obj.innerHTML = value;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Global hooks
window.showState = showState;
window.toggleHistory = toggleHistory;

// Init
document.addEventListener('DOMContentLoaded', init);
