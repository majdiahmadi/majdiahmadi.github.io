import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Majdi Ahmadi',
  description: 'Portfolio',
  base: '/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Experience', link: '/experience' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/majdiahmadi' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/majdiahmadi' },
    ],
  },
})
