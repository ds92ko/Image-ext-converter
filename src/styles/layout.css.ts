import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const layout = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxHeight: '100vh'
});

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 300,
  background: `linear-gradient(${vars.color.alpha.level1}, transparent)`,
  backdropFilter: 'blur(4px)'
});

export const symbol = style({
  fontSize: vars.fontSize.heading3,
  fontWeight: vars.fontWeight.large,
  background: vars.color.gradient.primary,
  color: vars.color.bg.neutral,
  padding: vars.spacing.xxs,
  borderRadius: vars.borderRadius.round,
  boxShadow: `1px 1px 3px ${vars.color.alpha.level3}`
});

export const logo = style({
  fontSize: vars.fontSize.heading4,
  fontWeight: vars.fontWeight.large,
  color: vars.color.text.neutral
});

export const main = style({
  position: 'relative',
  zIndex: 200,
  paddingTop: 76,
  flexGrow: 1
});

export const scrollArea = style({
  overflowY: 'auto'
});

export const footer = style({
  position: 'relative',
  zIndex: 100,
  flexShrink: 0,
  background: vars.color.alpha.level1,
  fontSize: vars.fontSize.tiny
});

export const container = style({
  paddingInline: vars.spacing.lg,
  paddingBlock: vars.spacing.sm,
  maxWidth: 1440,
  marginInline: 'auto',
  selectors: {
    'main &': {
      paddingBlock: vars.spacing.xl
    }
  }
});

export const sectionTitle = style({
  fontSize: vars.fontSize.heading1,
  fontWeight: vars.fontWeight.large,
  marginBottom: vars.spacing.xs
});

export const sectionSubTitle = style({
  fontSize: vars.fontSize.heading2,
  fontWeight: vars.fontWeight.large,
  marginBottom: vars.spacing.xs
});

export const sectionDescription = style({
  fontSize: vars.fontSize.heading4,
  marginBottom: vars.spacing.lg,
  color: vars.color.text.secondary
});
