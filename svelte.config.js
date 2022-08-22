import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [],

  kit: {
    prerender: {
      default: true
    },
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    })
  }
};

export default config;
