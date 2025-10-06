// Contrast check script (WCAG) - no dependencies
// Compares primary color #1F285E against light and dark backgrounds

function hexToRgb(hex) {
  const cleaned = hex.replace('#', '');
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function srgbToLinear(c) {
  c = c / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex);
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function contrastRatio(hex1, hex2) {
  const L1 = relativeLuminance(hex1);
  const L2 = relativeLuminance(hex2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function check(name, fg, bg) {
  const ratio = contrastRatio(fg, bg);
  const aa = ratio >= 4.5 ? 'PASS' : 'FAIL';
  const aaLarge = ratio >= 3.0 ? 'PASS' : 'FAIL';
  const aaa = ratio >= 7.0 ? 'PASS' : 'FAIL';
  const aaaLarge = ratio >= 4.5 ? 'PASS' : 'FAIL';

  console.log(`\n${name}`);
  console.log(`  Foreground: ${fg}  Background: ${bg}`);
  console.log(`  Contrast ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  WCAG AA (normal): ${aa}`);
  console.log(`  WCAG AA (large):  ${aaLarge}`);
  console.log(`  WCAG AAA (normal): ${aaa}`);
  console.log(`  WCAG AAA (large):  ${aaaLarge}`);
}

const primary = '#1F285E';
const primaryForeground = '#ffffff';
const backgroundLight = '#ffffff';
const backgroundDark = '#0a0a0a';
const foregroundLight = '#171717';

console.log('Running contrast checks for primary color #1F285E');

check('Primary on light background', primary, backgroundLight);
check('Primary on dark background', primary, backgroundDark);
check('Primary foreground (white) on primary', primaryForeground, primary);
check('Foreground text on light background', foregroundLight, backgroundLight);

console.log('\nNote: AA normal requires 4.5:1, AA large 3:1, AAA normal 7:1, AAA large 4.5:1');
