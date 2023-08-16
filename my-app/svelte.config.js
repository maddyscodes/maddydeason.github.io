import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { importAssets } from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess(), importAssets()],

  kit: {
    adapter: adapter()
  }
};

export default config;
