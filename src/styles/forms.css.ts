import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const button = style({
  background: vars.color.gradient.primary,
  fontSize: vars.fontSize.heading4,
  fontWeight: vars.fontWeight.large,
  color: vars.color.bg.neutral,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: vars.spacing.xs,
  paddingBlock: vars.spacing.xs,
  paddingInline: vars.spacing.md,
  borderRadius: vars.borderRadius.md,
  boxShadow: `2px 2px 6px ${vars.color.alpha.level3}`,
  width: 'max-content',

  selectors: {
    '&.icon': {
      paddingInline: vars.spacing.xs
    },
    '&.reverse': {
      background: vars.color.bg.neutral,
      color: vars.color.text.primary
    },
    '&.center': {
      margin: '0 auto'
    }
  }
});
