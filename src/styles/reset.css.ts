import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: 0,
  font: 'inherit',
  verticalAlign: 'baseline'
});

globalStyle('body', {
  lineHeight: 'normal'
});

globalStyle('ol, ul', {
  listStyle: 'none'
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit'
});

globalStyle('button', {
  background: 'transparent',
  cursor: 'pointer'
});
