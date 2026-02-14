// ── State ──
const state = {
  toggles: { SKL: true, WLL: true, PTCH: true, MKT: true, MIC: true, CLT: true, PAY: true },
  isValidated: true,
  mode: 'PILOT' // 'PILOT' | 'MECHANIC'
};

// ── Switch Config ──
const CONTEXT_SWITCHES = [
  { id: 'MKT', label: 'MARKET' },
  { id: 'MIC', label: 'COMPANY' },
  { id: 'CLT', label: 'CULTURE' },
  { id: 'PAY', label: 'PAY' }
];
const PERSONA_SWITCHES = [
  { id: 'SKL', label: 'SKILL' },
  { id: 'WLL', label: 'WILL' },
  { id: 'PTCH', label: 'PITCH' }
];

// ── DOM Refs ──
const $ = (id) => document.getElementById(id);

// ── Render a single industrial switch ──
function renderSwitch(container, id, label, isOn, size) {
  const isMechanic = state.mode === 'MECHANIC';
  const isValidatedSwitch = label === 'VALIDATED';
  const sz = size || 'md';

  let switchColor, switchGlow, textColor;
  if (isValidatedSwitch) {
    if (isOn) {
      switchColor = isMechanic ? 'bg-te-accent' : 'bg-te-pilot';
      switchGlow = isMechanic ? 'shadow-glow-green' : 'shadow-glow-blue';
      textColor = isMechanic ? 'text-te-accent' : 'text-te-pilot';
    } else {
      switchColor = 'bg-te-warning';
      switchGlow = 'shadow-glow-yellow';
      textColor = 'text-te-warning';
    }
  } else {
    if (isOn) {
      switchColor = isMechanic ? 'bg-te-accent' : 'bg-te-pilot';
      switchGlow = isMechanic ? 'shadow-glow-green' : 'shadow-glow-blue';
      textColor = isMechanic ? 'text-te-accent' : 'text-te-pilot';
    } else {
      switchColor = 'bg-te-danger';
      switchGlow = 'shadow-glow-red';
      textColor = 'text-te-danger';
    }
  }

  const w = sz === 'sm' ? 'w-10' : 'w-14';
  const h = sz === 'sm' ? 'h-16' : 'h-24';
  const th = sz === 'sm' ? 'h-10' : 'h-16';
  const ks = sz === 'sm' ? 'h-5 w-8' : 'h-8 w-12';
  const pos = isOn ? 'bottom-[60%]' : 'bottom-[10%]';
  const border = isOn ? 'border-transparent' : 'border-[#333]';

  container.innerHTML = `
    <div class="relative cursor-pointer group active:scale-95 transition-transform duration-75" data-switch="${id}">
      <div class="${w} ${h} bg-te-block rounded border border-te-border flex items-center justify-center relative shadow-hard">
        <div class="w-1.5 ${th} bg-[#050505] rounded-full relative shadow-inset-deep">
          <div class="absolute left-1/2 -translate-x-1/2 ${ks} rounded-sm border transition-all duration-200 ease-out z-10 flex items-center justify-center ${pos} ${switchColor} ${switchGlow} ${border}">
            <div class="flex flex-col gap-[2px] opacity-30">
              <div class="w-4 h-[1px] bg-black"></div>
              <div class="w-4 h-[1px] bg-black"></div>
              <div class="w-4 h-[1px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span class="font-mono text-[10px] tracking-widest transition-colors duration-300 ${textColor}">${label}</span>
  `;

  container.querySelector('[data-switch]').onclick = () => {
    if (id === 'VALIDATED') {
      state.isValidated = !state.isValidated;
    } else {
      state.toggles[id] = !state.toggles[id];
    }
    render();
  };
}

// ── Render indicators ──
function renderIndicators() {
  const isMechanic = state.mode === 'MECHANIC';
  const lockedColor = isMechanic ? 'green' : 'blue';
  const lockedActive = state.isValidated;
  const noiseActive = !state.isValidated;

  const colorMap = {
    green: { bg: 'bg-[#00FF00]', shadow: 'shadow-[0_0_8px_#00FF00]' },
    blue: { bg: 'bg-[#0070FF]', shadow: 'shadow-[0_0_8px_#0070FF]' },
    yellow: { bg: 'bg-[#FFD700]', shadow: 'shadow-[0_0_8px_#FFD700]' },
    red: { bg: 'bg-[#FF0000]', shadow: 'shadow-[0_0_8px_#FF0000]' }
  };

  const lockedC = lockedActive ? colorMap[lockedColor] : { bg: 'bg-[#222]', shadow: '' };
  const noiseC = noiseActive ? colorMap.yellow : { bg: 'bg-[#222]', shadow: '' };

  $('indicators').innerHTML = `
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full border border-[#333] transition-colors duration-100 ${lockedC.bg} ${lockedC.shadow}"></div>
      <span class="text-[10px] font-bold tracking-wider ${lockedActive ? 'text-white' : 'text-[#444]'}">LOCKED</span>
    </div>
    <div class="flex items-center gap-2">
      <div class="w-3 h-3 rounded-full border border-[#333] transition-colors duration-100 ${noiseC.bg} ${noiseC.shadow} ${noiseActive ? 'animate-pulse' : ''}"></div>
      <span class="text-[10px] font-bold tracking-wider ${noiseActive ? 'text-white' : 'text-[#444]'}">NOISE</span>
    </div>
  `;
}

// ── Render readout ──
function renderReadout() {
  const isMechanic = state.mode === 'MECHANIC';
  const accentText = isMechanic ? 'text-te-accent' : 'text-te-pilot';
  const borderColor = isMechanic ? 'border-te-accent' : 'border-te-pilot';
  const bulletBg = isMechanic ? 'bg-te-accent shadow-glow-green' : 'bg-te-pilot shadow-glow-blue';

  // Compute codes
  const personaCode = (state.toggles.SKL ? '1' : '0') + (state.toggles.WLL ? '1' : '0') + (state.toggles.PTCH ? '1' : '0');
  const contextCode = (state.toggles.MKT ? '1' : '0') + (state.toggles.MIC ? '1' : '0') + (state.toggles.CLT ? '1' : '0') + (state.toggles.PAY ? '1' : '0');
  const fullKeyCode = personaCode + contextCode;
  const personaName = PERSONA_NAMES[personaCode] || 'UNKNOWN';
  const rawAdvice = ADVICE_DATABASE[fullKeyCode] || {
    managerPatch: 'DATA CORRUPTION. Check connections.',
    individualSequence: 'SYSTEM RESET. Contact Admin.'
  };

  const content = isMechanic
    ? `${personaName}: ${rawAdvice.managerPatch}`
    : `${personaName}: ${rawAdvice.individualSequence}`;

  // Parse content
  const parts = content.split(/(?<=[.?!])\s+/);
  const statusPath = parts[0] || 'NO SIGNAL';
  const diagnosticBits = parts.slice(1);

  // Update key hash
  $('key-hash').textContent = fullKeyCode;

  // Update readout glow border
  $('readout-glow').className = `absolute inset-0 border-2 opacity-50 pointer-events-none transition-colors duration-300 ${borderColor}`;

  // Update title
  $('readout-title').textContent = isMechanic ? 'SYSTEM DIAGNOSTICS' : 'FLIGHT PLAN';
  $('readout-sub').textContent = isMechanic ? 'MAINTENANCE_LOG // 0x4A' : 'NAV_SYSTEM // 0x9F';

  // Update badge
  const badge = $('readout-badge');
  badge.textContent = isMechanic ? 'MECH_ACTIVE' : 'PILOT_ACTIVE';
  badge.className = `text-[10px] font-bold px-2 py-1 border ${isMechanic ? 'border-te-accent text-te-accent' : 'border-te-pilot text-te-pilot'}`;

  // Update status
  const statusEl = $('readout-status');
  statusEl.textContent = statusPath;
  statusEl.className = `font-mono font-bold uppercase leading-none text-4xl md:text-6xl tracking-tight drop-shadow-lg ${accentText}`;

  // Update checks
  const checksEl = $('readout-checks');
  if (diagnosticBits.length > 0) {
    checksEl.innerHTML = diagnosticBits.map(bit =>
      `<li class="flex items-start gap-3 text-sm md:text-base font-mono text-[#ccc] leading-snug">
        <span class="mt-1.5 w-1.5 h-1.5 shrink-0 ${bulletBg}"></span>
        <span>${bit}</span>
      </li>`
    ).join('');
  } else {
    checksEl.innerHTML = '<div class="text-sm text-[#444] italic">AWAITING INPUT STREAM...</div>';
  }

  // Signal overlay
  const overlay = $('signal-overlay');
  if (!state.isValidated) {
    overlay.style.display = 'flex';
  } else {
    overlay.style.display = 'none';
  }

  // Footer
  $('footer-time').textContent = new Date().toLocaleTimeString();
  $('footer-status').textContent = isMechanic ? 'MAINTENANCE' : 'OPERATIONAL';
}

// ── Mode switch ──
function toggleMode() {
  state.mode = state.mode === 'MECHANIC' ? 'PILOT' : 'MECHANIC';

  // CRT flicker effect
  const crt = $('crt-overlay');
  crt.classList.add('animate-flicker', 'bg-white/10');
  setTimeout(() => {
    crt.classList.remove('animate-flicker', 'bg-white/10');
  }, 150);

  render();
}

// ── Update mode switch visual ──
function renderModeSwitch() {
  const isMechanic = state.mode === 'MECHANIC';
  const slider = $('mode-slider');
  slider.className = `absolute top-1 bottom-1 w-[48%] rounded-sm border border-black/20 transition-all duration-300 ease-out z-10 flex items-center justify-center ${
    isMechanic ? 'left-[50%] bg-te-accent shadow-glow-green' : 'left-[2%] bg-te-pilot shadow-glow-blue'
  }`;
}

// ── Full render ──
function render() {
  const isMechanic = state.mode === 'MECHANIC';
  const accentClass = isMechanic ? 'bg-te-accent' : 'bg-te-pilot';
  const textClass = isMechanic ? 'text-te-accent' : 'text-te-pilot';

  // Header
  $('header-title').className = `text-2xl md:text-3xl font-bold tracking-widest transition-colors duration-300 lowercase ${textClass}`;
  $('header-subtitle').textContent = isMechanic
    ? 'DIAGNOSTIC: MECHANIC MODE // SYSTEM MAINTENANCE'
    : 'DIAGNOSTIC: PILOT MODE // FLIGHT PATH';

  // Accent bars
  $('ctx-accent').className = `absolute -left-[1px] top-6 w-[2px] h-8 transition-colors duration-300 ${accentClass}`;
  $('per-accent').className = `absolute -left-[1px] top-6 w-[2px] h-8 transition-colors duration-300 ${accentClass}`;
  $('val-accent').className = `absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-8 transition-colors duration-300 ${accentClass}`;

  // Mode switch
  renderModeSwitch();

  // Context switches
  const ctxContainer = $('context-switches');
  ctxContainer.innerHTML = '';
  CONTEXT_SWITCHES.forEach(sw => {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center gap-2';
    ctxContainer.appendChild(div);
    renderSwitch(div, sw.id, sw.label, state.toggles[sw.id], 'sm');
  });

  // Persona switches
  const perContainer = $('persona-switches');
  perContainer.innerHTML = '';
  PERSONA_SWITCHES.forEach(sw => {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center gap-2';
    perContainer.appendChild(div);
    renderSwitch(div, sw.id, sw.label, state.toggles[sw.id], 'md');
  });

  // Validated switch
  const valContainer = $('validated-switch');
  valContainer.innerHTML = '';
  const valDiv = document.createElement('div');
  valDiv.className = 'flex flex-col items-center gap-2';
  valContainer.appendChild(valDiv);
  renderSwitch(valDiv, 'VALIDATED', 'VALIDATED', state.isValidated, 'sm');

  // Indicators
  renderIndicators();

  // Readout
  renderReadout();
}

// ── Mode switch click handler ──
$('mode-switch').addEventListener('click', toggleMode);

// ── Init ──
render();
