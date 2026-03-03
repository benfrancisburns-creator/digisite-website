/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1B2A',
        section: '#0F2035',
        deep: '#162236',
        steel: '#2A3F52',
        cyan: '#00D4FF',
        amber: '#F5A623',
        'off-white': '#F7F9FC',
        'mid-grey': '#8A9BB0',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
