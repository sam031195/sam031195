/**
 * Application-wide constants and configuration values
 * Following Single Source of Truth (SSOT) principle
 */

// Animation & Timing
export const ANIMATION = {
  SCROLL_THRESHOLD: 120, // px - threshold for hiding effects on scroll
  FADE_DURATION: 0.6, // seconds - fade transition duration
  ROTATE_DURATION: 0.2, // seconds - rotation animation duration
  PARTICLE_MIN_DURATION: 3, // seconds - minimum animation duration
  PARTICLE_MAX_DURATION: 7, // seconds - maximum animation duration (3 + 4)
  PARTICLE_MAX_DELAY: 3, // seconds - maximum animation delay
} as const;

// Holiday Effects Configuration
export const HOLIDAY = {
  PARTICLE_COUNT: 50,
  HEADER_PARTICLE_COUNT: 15,
  BASE_OPACITY: 0.2,
  OPACITY_RANGE: 0.4,
  HEADER_OPACITY_BASE: 0.4,
  HEADER_OPACITY_RANGE: 0.3,
} as const;

// Modal Configuration
export const MODAL = {
  Z_INDEX: 10000,
  WIDTH_VW: 95,
  HEIGHT_VH: 95,
  BORDER_RADIUS: 16, // px
  BORDER_RADIUS_MOBILE: 12, // px
} as const;

// Layout
export const LAYOUT = {
  SCROLL_OFFSET: 100, // px - offset for active section detection
  HEADER_HEIGHT: 80, // px - approximate header height
} as const;

// Z-Index Hierarchy
export const Z_INDEX = {
  HOLIDAY_EFFECTS: 9999,
  MODAL_OVERLAY: 10000,
  DEV_PANEL: 10000,
  EMBEDDED_OVERLAY: 100,
  LOADING_SPINNER: 10,
} as const;

// Accessibility
export const A11Y = {
  REDUCED_MOTION_OPACITY: 0.3,
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE_MB: 10,
  ALLOWED_EXTENSIONS: ['.csv', '.json', '.xlsx'] as const,
} as const;

// Breakpoints (matches CSS)
export const BREAKPOINTS = {
  MOBILE: 768, // px
  TABLET: 1024, // px
  DESKTOP: 1280, // px
} as const;

