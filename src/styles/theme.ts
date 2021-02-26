import { CSSObject, DefaultTheme } from 'styled-components';

export interface ThemeProps extends DefaultTheme {
  theme: {
    white: CSSObject;
    boxShadow: CSSObject;
    background: CSSObject;
    whiteLine: CSSObject;
    grayLine: CSSObject;
    text: CSSObject;
    textHighlight: CSSObject;
    title: CSSObject;
    red: CSSObject;
    green: CSSObject;
    blue: CSSObject;
    blueDark: CSSObject;
    blueTwitter: CSSObject;
    themeColor: CSSObject;
  };
}

export const light = {
  white: '#FFF',
  boxShadow: 'rgba(0,0,0,0.05)',
  background: '#F2f3F5',
  whiteLine: '#f0f1f3',
  grayLine: '#DcDDE0',
  text: '#666',
  textHighlight: '#b3b9ff',
  title: '#2e384d',
  red: '#e8384d',
  green: '#4cd62b',
  blue: '#F59086',
  blueDark: '#DE886F',
  blueTwitter: '#FFADA6',
  themeColor: '#e5de44',
};

export const dark = {
  white: '#000',
  boxShadow: 'rgba(255,255,255,0.05)',
  background: '#0d0c0a',
  grayLine: '#23221f',
  whiteLine: '#0f0e0c',
  text: '#999',
  textHighlight: '#b3b9ff',
  title: '#dfe3ec',
  red: '#e8384d',
  green: '#4cd62b',
  blue: '#F59086',
  blueDark: '#DE886F',
  blueTwitter: '#FFADA6',
  themeColor: '#1c375c',
};
