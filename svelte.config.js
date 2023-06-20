import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		})
	}
};

export default config;
