const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const requiredIds = [
  'navBtnSim', 'navBtnAsh', 'pageSimulator', 'pageAshMap',
  'btnMapModeImpact', 'btnMapModeAsh', 'asideBtnModeImpact', 'asideBtnModeAsh',
  'mapDrawerBackdrop', 'mapAside', 'btnMobileMapDrawer', 'mobileMapQuickPill',
  'mapSidebarImpactSection', 'mapSidebarAshSection', 'mapSidebarTitle', 'mapSidebarSubtitle',
  'mapParamV0', 'mapParamAngle', 'mapParamMass', 'mapParamCd',
  'mapImpactDist', 'mapImpactEnergy', 'mapImpactTnt', 'mapImpactCrater',
  'mapImpactBlast', 'mapImpactVel', 'mapImpactSplash', 'mapImpactSector',
  'mapImpactDesc', 'mapImpactMitigation', 'mapImpactKrbBadge',
  'mapWentworthBlockDist', 'mapWentworthBomb256Dist', 'mapWentworthBomb64Dist', 'mapWentworthLapilliDist',
  'leafletMap', 'windParticlesCanvas', 'tileBtnSat', 'tileBtnDark', 'toggleWindParticleBtn'
];

let missingIds = [];
requiredIds.forEach(id => {
  if (!content.includes('id="' + id + '"') && !content.includes("id='" + id + "'")) {
    missingIds.push(id);
  }
});

console.log('--- DOM IDs Verification ---');
console.log('Total checked:', requiredIds.length);
console.log('Missing IDs:', missingIds.length === 0 ? 'NONE (ALL PRESENT)' : missingIds);

const requiredFuncs = [
  'function set2DMapMode',
  'function showImpactMapLayers',
  'function showAshMapLayers',
  'function render2DBallisticImpactOnMap',
  'function toggleMobileMapDrawer',
  'function focusMapOnImpact',
  'function resetMapView',
  'function openImpactOn2DMap',
  'function setup2DInteractions',
  'function draw2DCanvas',
  'function switchPage'
];

let missingFuncs = [];
requiredFuncs.forEach(fn => {
  if (!content.includes(fn)) {
    missingFuncs.push(fn);
  }
});

console.log('--- JS Functions Verification ---');
console.log('Total checked:', requiredFuncs.length);
console.log('Missing Functions:', missingFuncs.length === 0 ? 'NONE (ALL PRESENT)' : missingFuncs);

console.log('--- Dual-Mode Default Check ---');
const hasImpactDefault = content.includes('let current2DMapMode = "impact"');
console.log('Mode Dampak Ledakan is Primary & Default:', hasImpactDefault ? 'YES' : 'NO');

console.log('--- Mobile Touch Gesture Check ---');
const hasTouchPan = content.includes('touchstart') && content.includes('touchmove') && content.includes('touchend');
const hasPinchZoom = content.includes('touchInitialDist');
console.log('Touch Pan & Pinch-to-zoom on 2D Canvas:', hasTouchPan && hasPinchZoom ? 'YES' : 'NO');

console.log('--- Em Dash Check ---');
const emDashes = (content.match(/\u2014/g) || []).length;
console.log('Em Dash Count:', emDashes);
