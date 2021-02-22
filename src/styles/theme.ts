import { CSSObject, DefaultTheme } from 'styled-components';

export interface ThemeProps extends DefaultTheme {
  theme: {
    white: CSSObject;
    background: CSSObject;
    grayLine: CSSObject;
    text: CSSObject;
    textHighlight: CSSObject;
    title: CSSObject;
    red: CSSObject;
    green: CSSObject;
    blue: CSSObject;
    blueDark: CSSObject;
    blueTwitter: CSSObject;
  };
}

export const theme = {
  white: '#FFF',
  background: '#F2f3F5',
  grayLine: '#DcDDE0',
  text: '#666',
  textHighlight: '#b3b9ff',
  title: '#2e384d',
  red: '#e8384d',
  green: '#4cd62b',
  blue: '#5975e0',
  blueDark: '#4953b8',
  blueTwitter: '#2aa9e0',
};
