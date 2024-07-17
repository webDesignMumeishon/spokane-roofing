import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'Spokane Roofing',
    brandUrl: 'https://spokane-realtors.com/',
    brandTarget: '_blank',
  }),
});
