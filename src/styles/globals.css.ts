import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

globalStyle('body', {
  background: vars.color.bg.neutral,
  color: vars.color.text.neutral,
  fontSize: vars.fontSize.body,
  fontFamily: vars.fontFamily.notoSans
});

export const textWhite = style({
  color: '#fff !important'
});

export const flexBox = style({
  display: 'flex',
  selectors: {
    '&.between': {
      justifyContent: 'space-between'
    },
    '&.start': {
      justifyContent: 'flex-start'
    },
    '&.middle': {
      justifyContent: 'center'
    },
    '&.end': {
      justifyContent: 'flex-end'
    },
    '&.left': {
      alignItems: 'flex-start'
    },
    '&.center': {
      alignItems: 'center'
    },
    '&.right': {
      alignItems: 'flex-end'
    },
    '&.xs': {
      gap: vars.spacing.xs
    },
    '&.sm': {
      gap: vars.spacing.sm
    },
    '&.md': {
      gap: vars.spacing.md
    },
    '&.lg': {
      gap: vars.spacing.lg
    },
    '&.xl': {
      gap: vars.spacing.xl
    }
  }
});
