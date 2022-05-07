// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'UCOCAMP',
  brandUrl: 'https://ucocamp.aulasoftwarelibre.uco.es/',
  brandImage: 'https://github.com/UCOcamp/frontend/blob/main/public/logoLargo.png?raw=true',

  colorPrimary: 'rgba(172,9,55,0.9)',
  colorSecondary: 'rgba(172,9,55,0.9)',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,
  

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'white',
  barSelectedColor: 'gold',
  barBg: 'rgba(172,9,55,0.9)',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});