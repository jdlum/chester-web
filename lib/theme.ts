// Chester Design Tokens — single source of truth for the marketing site
// Mirrors chester/lib/theme.ts from the mobile app

export const colors = {
  chesterGreen: '#2C3D28',
  chesterGreenLight: '#E8EDE6',
  chesterGreenMid: '#A8B8A0',
  chesterGreenSurface: '#F0F4EE',
  deepForest: '#1E2E1A',
  honey: '#C4783A',
  honeyLight: '#F5E8D8',
  sage: '#7A8C6A',
  sageLight: '#EFF3ED',
  slate: '#4A5E6E',
  slateLight: '#E3ECF1',
  parchment: '#EDE5D4',
  offWhite: '#FAFAF6',
  linen: '#D9D0BF',
} as const;

export const fonts = {
  heading: '"DM Serif Display", serif',
  body: '"Plus Jakarta Sans", sans-serif',
} as const;
