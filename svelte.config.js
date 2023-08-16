import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess(), importAssets()],

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/maddyscodes.github.io' : '',
    }
  }
};

export default config;
