import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Ilker Mutlu | Blog',
  description: 'My journey learning Astro',
  site: 'https://meet-creponne.netlify.app',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});
