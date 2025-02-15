import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    // Logo
    brandTitle: 'Spokane Roofing Solutions',
    brandUrl: 'https://spokaneroofing.co/',
    brandTarget: '_blank',
  }),
});
