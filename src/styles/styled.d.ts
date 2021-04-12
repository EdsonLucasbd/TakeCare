import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      white: string,
      grayLine: string,
      title: string,
      red: string,
      green: string,
      blue: string,
      blueDark: string,
      blueText: string,
      background: string,
      text: string,
      blueTwitter: string,
      borderBottom: string,
      lateralBorder: string,
      levelUpBackground: string,
      boxShadow: string,
    }
  }
}