import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const global = createGlobalTheme(':root', {
  fontFamily: {
    notoSans: `var(--font-noto-sans)`
  },
  fontSize: {
    heading1: '60px',
    heading2: '36px',
    heading3: '28px',
    heading4: '18px',
    body: '16px',
    tiny: '14px'
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    large: '700'
  },
  borderRadius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '10px',
    xl: '16px',
    round: '50%'
  },
  spacing: {
    xxs: '6px',
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '48px',
    xl: '80px'
  }
});

const themeColor = createThemeContract({
  color: {
    bg: {
      neutral: null,
      primary: null,
      secondary: null
    },
    text: {
      neutral: null,
      primary: null,
      secondary: null
    },
    semantic: {
      error: null,
      success: null,
      info: null
    },
    gradient: {
      primary: null
    },
    alpha: {
      level1: null,
      level2: null,
      level3: null,
      level4: null,
      level5: null,
      level6: null,
      level7: null,
      level8: null,
      level9: null
    }
  }
});

export const lightTheme = createTheme(themeColor, {
  color: {
    bg: {
      neutral: '#fff',
      primary: '#fae8ff',
      secondary: '#f0f9ff'
    },
    text: {
      neutral: '#1c1e21',
      primary: '#e879f9',
      secondary: '#6b7280'
    },
    semantic: {
      error: '#ef4444',
      success: '#059669',
      info: '#0284c7'
    },
    gradient: {
      primary: 'linear-gradient(90deg, #c026d3, #e879f9)'
    },
    alpha: {
      level1: 'rgba(0, 0, 0, .1)',
      level2: 'rgba(0, 0, 0, .2)',
      level3: 'rgba(0, 0, 0, .3)',
      level4: 'rgba(0, 0, 0, .4)',
      level5: 'rgba(0, 0, 0, .5)',
      level6: 'rgba(0, 0, 0, .6)',
      level7: 'rgba(0, 0, 0, .7)',
      level8: 'rgba(0, 0, 0, .8)',
      level9: 'rgba(0, 0, 0, .9)'
    }
  }
});

export const darkTheme = createTheme(themeColor, {
  color: {
    bg: {
      neutral: '#0e0e10',
      primary: '#0f172a',
      secondary: '#18181B'
    },
    text: {
      neutral: '#fff',
      primary: '#d946ef',
      secondary: '#a1a1aa'
    },
    semantic: {
      error: '#ef4444',
      success: '#6ee7b7',
      info: '#7dd3fc'
    },
    gradient: {
      primary: 'linear-gradient(90deg, #e879f9, #f0abfc)'
    },
    alpha: {
      level1: 'rgba(255, 255, 255, .1)',
      level2: 'rgba(255, 255, 255, .2)',
      level3: 'rgba(255, 255, 255, .3)',
      level4: 'rgba(255, 255, 255, .4)',
      level5: 'rgba(255, 255, 255, .5)',
      level6: 'rgba(255, 255, 255, .6)',
      level7: 'rgba(255, 255, 255, .7)',
      level8: 'rgba(255, 255, 255, .8)',
      level9: 'rgba(255, 255, 255, .9)'
    }
  }
});

export const vars = { ...global, ...themeColor };
