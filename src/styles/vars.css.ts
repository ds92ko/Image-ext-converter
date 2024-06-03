import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  color: {
    white: '#fff',
    black: '#000'
  },
  alpha: {
    black1: 'rgba(0, 0, 0, .1)',
    black2: 'rgba(0, 0, 0, .2)',
    black3: 'rgba(0, 0, 0, .3)',
    black4: 'rgba(0, 0, 0, .4)',
    black5: 'rgba(0, 0, 0, .5)',
    black6: 'rgba(0, 0, 0, .6)',
    black7: 'rgba(0, 0, 0, .7)',
    black8: 'rgba(0, 0, 0, .8)',
    black9: 'rgba(0, 0, 0, .9)',
    white1: 'rgba(255, 255, 255, .1)',
    white2: 'rgba(255, 255, 255, .2)',
    white3: 'rgba(255, 255, 255, .3)',
    white4: 'rgba(255, 255, 255, .4)',
    white5: 'rgba(255, 255, 255, .5)',
    white6: 'rgba(255, 255, 255, .6)',
    white7: 'rgba(255, 255, 255, .7)',
    white8: 'rgba(255, 255, 255, .8)',
    white9: 'rgba(255, 255, 255, .9)'
  },
  typo: {
    heading1: '48px',
    heading2: '32px',
    heading3: '24px',
    heading4: '20px',
    body: '16px',
    caption: '14px',
    tiny: '12px'
  }
});

export default vars;
