// tailwind.config.js
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'azul-oscuro': '#1a202c',
		},
		fontFamily: {
		  'roboto': ['Roboto', 'sans-serif'],
		},
	  },
	},
	plugins: [],
  }