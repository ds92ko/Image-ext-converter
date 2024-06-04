import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/vars.css';

export const introSection = style({
  background: vars.color.bg.primary
});

export const startSection = style({
  background: `linear-gradient(-135deg, rgb(0, 255, 153) 0%, rgb(153, 51, 255) 100%)`,
  textAlign: 'center'
});

export const lottieBox = style({
  margin: '0 auto',
  width: 200,
  aspectRatio: '1/1',
  selectors: {
    '&.intro': {
      width: 550,
      margin: 0
    }
  }
});
