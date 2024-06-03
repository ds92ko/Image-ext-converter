import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  border: 0,
  fontSize: '100%',
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
