import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import cssnano from 'cssnano';

export const config: Config = {
  globalStyle: 'src/scss/blaze.scss',
  taskQueue: 'async',
  plugins: [
    sass(),
    postcss({
      plugins: [
        cssnano({
          preset: [
            'default',
            {
              autoprefixer: { browsers: 'last 2 versions', add: true },
              zindex: false,
            },
          ],
        }),
      ],
    }),
  ],

  namespace: 'blaze',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
