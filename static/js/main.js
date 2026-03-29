/* ══════════════════════════════════════════════════
   AURA — Emotion Adaptive UI · Main JS
   ══════════════════════════════════════════════════ */

// ── EMOTION CONFIG ───────────────────────────────────
const EMOTION_CONFIG = {
  happy: {
    emoji: "😄",
    badge: "Happy — Energised state detected",
    title: "You're in great spirits today!",
    desc: "Your positive emotional state has been detected. AURA has amplified the interface energy to match your mood — brighter colours, larger typography, and a more dynamic layout.",
    alert:
      "Happy mood detected — interface optimised for high-energy engagement.",
    alertIcon: "🌟",
    cardTitle: "Riding High — Keep the Momentum",
    cardBody:
      "Research shows that positive emotions broaden cognitive scope and enhance creative thinking. This is the perfect state for brainstorming, ideating, and tackling complex challenges.",
    tip: "You seem happy and energised! This is the best time to tackle your most challenging tasks, make important decisions, or engage with creative work. Your cognitive bandwidth is at its peak.",
    tipTitle: "Peak Performance Window",
    tipIcon: "⚡",
    statusLabel: "Happy — High Energy",
    color: "#f0d932",
  },
  sad: {
    emoji: "😔",
    badge: "Sadness detected — adapting interface",
    title: "Take it easy.\nYou matter.",
    desc: "AURA has detected a lower emotional state. The interface has shifted to a warmer, gentler tone — softer colours, larger text for easier reading, and a more supportive layout.",
    alert: "Gentle mode active — interface simplified for comfort and ease.",
    alertIcon: "🤍",
    cardTitle: "It's Okay to Rest",
    cardBody:
      "AURA has adjusted the interface to be softer and more supportive. Sometimes the most productive thing you can do is take a short break, breathe deeply, and return with fresh perspective.",
    tip: "It looks like you might be feeling low. Consider taking a 5-minute break — step away from the screen, drink some water, or take a short walk. Research shows brief breaks significantly restore emotional balance.",
    tipTitle: "Gentle Suggestion",
    tipIcon: "🤍",
    statusLabel: "Sad — Comfort Mode",
    color: "#78a0dc",
  },
  angry: {
    emoji: "😤",
    badge: "Elevated stress detected — calming UI",
    title: "Breathe.\nLet's slow down.",
    desc: "AURA has detected elevated stress signals. The interface has switched to a calming blue palette — cooler tones, reduced visual noise, and a simplified layout to help ground your attention.",
    alert: "Calm mode active — reduced stimuli and cooler tones applied.",
    alertIcon: "🌊",
    cardTitle: "Pause Before You Proceed",
    cardBody:
      "When stress is elevated, cognitive performance on detail-oriented tasks can suffer by up to 40%. AURA has simplified the interface to reduce visual load. Consider the 4-7-8 breathing technique before continuing.",
    tip: "Stress or frustration detected. Try box breathing: inhale for 4 counts, hold for 7, exhale for 8. Research shows this activates the parasympathetic nervous system within 60 seconds. Return when ready.",
    tipTitle: "Stress Relief Prompt",
    tipIcon: "🌊",
    statusLabel: "Angry — Calm Mode",
    color: "#4da6ff",
  },
  fear: {
    emoji: "😨",
    badge: "Anxiety signals detected",
    title: "You are safe.\nTake a moment.",
    desc: "AURA has detected signs of anxiety or fear. The interface has shifted to a deep, grounding purple palette. Visual complexity has been minimised to reduce cognitive overload.",
    alert: "Grounding mode active — interface simplified to reduce anxiety.",
    alertIcon: "🫂",
    cardTitle: "Ground Yourself",
    cardBody:
      "Try the 5-4-3-2-1 grounding technique: identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste. This technique rapidly anchors attention to the present moment.",
    tip: "Anxiety signals detected. AURA has simplified the interface to reduce overwhelm. Ground yourself with slow breathing. You are in control of this moment.",
    tipTitle: "Grounding Technique",
    tipIcon: "🫂",
    statusLabel: "Fear — Grounding Mode",
    color: "#b794f4",
  },
  surprise: {
    emoji: "😲",
    badge: "Surprise state detected",
    title: "Something caught\nyour attention!",
    desc: "A surprise state has been detected. AURA has activated a vibrant teal palette to match the heightened alertness and arousal associated with surprise — your attention is at its sharpest right now.",
    alert: "High-alertness mode — teal palette activated for peak focus.",
    alertIcon: "✨",
    cardTitle: "Capture This Moment",
    cardBody:
      "Surprise triggers a spike in norepinephrine which dramatically sharpens focus and attention to detail. This is an excellent moment to absorb new information, read complex material, or explore something unfamiliar.",
    tip: "Your surprise response indicates heightened alertness. Use this window of sharp attention to engage with new or complex information — your brain is primed for rapid learning right now.",
    tipTitle: "Attention Spike Detected",
    tipIcon: "✨",
    statusLabel: "Surprised — Alert Mode",
    color: "#50d2c8",
  },
  disgust: {
    emoji: "😒",
    badge: "Discomfort signals detected",
    title: "Something feels\noff. That's valid.",
    desc: "AURA has detected signals of discomfort or disgust. The interface has shifted to a muted, earthy palette and reduced visual clutter to create a more neutral and calming environment.",
    alert: "Neutral mode active — reduced stimuli to ease discomfort.",
    alertIcon: "🍃",
    cardTitle: "Step Back and Reassess",
    cardBody:
      "Feelings of discomfort or aversion often signal that something in your environment needs to change. AURA has created a cleaner, quieter space. Take a moment to identify what's causing this reaction.",
    tip: "Discomfort detected. Consider whether your current task or environment is the source. Sometimes stepping away and returning with a fresh perspective is the most effective course of action.",
    tipTitle: "Environment Check",
    tipIcon: "🍃",
    statusLabel: "Disgust — Neutral Mode",
    color: "#8cb450",
  },
  neutral: {
    emoji: "😐",
    badge: "Neutral state — baseline detected",
    title: "How are you feeling\nright now?",
    desc: "A calm, neutral state has been detected. AURA is in baseline mode — clean, minimal, and distraction-free. This is the default state for focused, productive work.",
    alert: "Baseline mode active — clean interface for focused work.",
    alertIcon: "◎",
    cardTitle: "Calm and Focused",
    cardBody:
      "A neutral emotional state is associated with clear, analytical thinking and steady attention. This is the ideal state for systematic work, planning, and tasks that require sustained concentration.",
    tip: "You appear calm and focused. This is an excellent state for methodical work — writing, coding, analysis, or planning. AURA will continue monitoring and adapt if your state changes.",
    tipTitle: "Optimal Focus State",
    tipIcon: "🎯",
    statusLabel: "Neutral — Baseline",
    color: "#58a6ff",
  },
};

const EMOTION_COLORS = {
  happy: "#f6c90e",
  neutral: "#58a6ff",
  surprise: "#50d2c8",
  sad: "#78a0dc",
  angry: "#fc8181",
  fear: "#b794f4",
  disgust: "#8cb450",
};

// ── STATE ────────────────────────────────────────────
let currentEmotion = "neutral";
let cameraVisible = false;
let emotionHistory = [];
let pollInterval = null;

// ── INIT ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  startPolling();
});

// ── POLLING ──────────────────────────────────────────
function startPolling() {
  setStatus("Connecting to emotion engine...", false);
  pollInterval = setInterval(fetchEmotion, 1000);
  fetchEmotion();
}

async function fetchEmotion() {
  try {
    const res = await fetch("/api/emotion");
    const data = await res.json();
    handleEmotionUpdate(data);
  } catch (err) {
    setStatus("Engine not responding...", false);
  }
}

// ── HANDLE UPDATE ─────────────────────────────────────
function handleEmotionUpdate(data) {
  const { emotion, confidence, scores, frame_count } = data;

  // Update stats panel
  document.getElementById("stat-frames").textContent = frame_count;
  document.getElementById("stat-emotion").textContent = capitalize(emotion);
  document.getElementById("stat-conf").textContent =
    confidence.toFixed(1) + "%";
  document.getElementById("stat-theme").textContent = "theme-" + emotion;
  document.getElementById("stat-engine").textContent = "Running ✓";

  // Update ticker
  document.getElementById("ticker-value").textContent = emotion.toUpperCase();
  document.getElementById("ticker-conf").textContent =
    "confidence: " + confidence.toFixed(1) + "%";

  // Update feed panel
  document.getElementById("emotion-big").textContent = capitalize(emotion);
  document.getElementById("conf-bar").style.width = confidence + "%";
  document.getElementById("conf-val").textContent = confidence.toFixed(0) + "%";

  // Update scores
  renderScores(scores);

  // Update history chart
  emotionHistory.push(emotion);
  if (emotionHistory.length > 20) emotionHistory.shift();
  renderChart();

  // Update status
  const cfg = EMOTION_CONFIG[emotion] || EMOTION_CONFIG.neutral;
  setStatus(cfg.statusLabel, true);

  // Only update full theme if emotion changed
  if (emotion !== currentEmotion) {
    currentEmotion = emotion;
    applyTheme(emotion, cfg);
  }
}

// ── APPLY THEME ───────────────────────────────────────
function applyTheme(emotion, cfg) {
  const body = document.getElementById("body");

  // Remove all themes
  Object.keys(EMOTION_CONFIG).forEach((e) => {
    body.classList.remove("theme-" + e);
  });

  // Apply new theme
  body.classList.add("theme-" + emotion);

  // Update hero badge
  const badge = document.getElementById("badge-emoji");
  badge.textContent = cfg.emoji;
  badge.classList.add("stable");
  document.getElementById("badge-text").textContent = cfg.badge;

  // Update hero text
  document.getElementById("hero-title").textContent = cfg.title;
  document.getElementById("hero-desc").textContent = cfg.desc;

  // Update alert banner
  document.getElementById("alert-icon").textContent = cfg.alertIcon;
  document.getElementById("alert-text").textContent = cfg.alert;

  // Update main card
  document.getElementById("card-title-1").textContent = cfg.cardTitle;
  document.getElementById("card-body-1").textContent = cfg.cardBody;
  document.getElementById("card-stat-1").textContent =
    "Emotion: " + capitalize(emotion);

  // Update tips
  document.getElementById("tips-icon").textContent = cfg.tipIcon;
  document.getElementById("tips-title").textContent = cfg.tipTitle;
  document.getElementById("tips-body").textContent = cfg.tip;

  // Update emotion display in feed
  document.getElementById("emotion-big").textContent = capitalize(emotion);

  // Subtle page title update
  document.title = "AURA — " + capitalize(emotion) + " State Detected";
}

// ── RENDER SCORES ─────────────────────────────────────
function renderScores(scores) {
  if (!scores || Object.keys(scores).length === 0) return;

  const container = document.getElementById("scores-grid");
  container.innerHTML = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([name, val]) => {
      const color = EMOTION_COLORS[name] || "#58a6ff";
      const width = Math.min(val, 100).toFixed(0);
      return `
        <div class="score-row">
          <span class="score-name">${name}</span>
          <div class="score-bar-track">
            <div class="score-bar-fill"
                 style="width:${width}%; background:${color}"></div>
          </div>
          <span class="score-num">${val.toFixed(0)}%</span>
        </div>`;
    })
    .join("");
}

// ── RENDER CHART ──────────────────────────────────────
function renderChart() {
  const container = document.getElementById("chart-bars");
  if (!emotionHistory.length) return;

  container.innerHTML = emotionHistory
    .map((em, i) => {
      const color = EMOTION_COLORS[em] || "#58a6ff";
      const height = Math.floor(Math.random() * 40) + 40;
      const isLast = i === emotionHistory.length - 1;
      return `
      <div class="chart-bar"
           title="${em}"
           style="
             height: ${height}px;
             background: ${color};
             opacity: ${isLast ? 1 : 0.5 + i * 0.025};
             outline: ${isLast ? "2px solid " + color : "none"};
           ">
      </div>`;
    })
    .join("");
}

// ── UI HELPERS ────────────────────────────────────────
function setStatus(label, active) {
  document.getElementById("status-label").textContent = label;
  const dot = document.getElementById("status-dot");
  if (active) {
    dot.classList.add("active");
  } else {
    dot.classList.remove("active");
  }
}

function toggleCamera() {
  const panel = document.getElementById("feed-panel");
  cameraVisible = !cameraVisible;
  panel.style.display = cameraVisible ? "block" : "none";
}

function scrollToContent() {
  document
    .getElementById("main-content")
    .scrollIntoView({ behavior: "smooth" });
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
