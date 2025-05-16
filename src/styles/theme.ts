export const breakpoints = {
	mobile: '768px',
	desktop: '1024px',
} as const;

export const theme = {
	breakpoints,
} as const;

export type Theme = typeof theme;

// Media query helpers
export const media = {
	mobile: `@media (max-width: ${breakpoints.mobile})`,
	desktop: `@media (max-width: ${breakpoints.desktop})`,
} as const;
