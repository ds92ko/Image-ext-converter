import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const CardList = style({
  display: 'flex',
  gap: vars.spacing.lg,
  marginTop: vars.spacing.md
});

export const Card = style({
  textAlign: 'center',
  flex: 1,
  borderRadius: vars.borderRadius.xl,
  paddingBlock: vars.spacing.md,
  paddingInline: vars.spacing.lg,
  background: vars.color.bg.secondary,
  boxShadow: `3px 3px 8px ${vars.color.alpha.level3}`
});
