import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oscarfrias.com',
  redirects: {
    '/about-me': '/resume/',
    '/blog': '/writing/',
    '/contact': '/resume/#contact',
    '/portfolio/unilife': '/projects/unilife/',
    '/portfolio/astrobotic': '/projects/astrobotic/',
    '/portfolio/highground': '/projects/highground/',
    '/portfolio/international': '/projects/international/',
  },
});