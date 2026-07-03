import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Majdi Ahmadi | Cybersecurity Portfolio',
  description: 'Portfolio for malware analysis, network security, cryptography, and secure systems projects.',
  appearance: 'dark',
  lastUpdated: false,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Experience', link: '/experience' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/majdiahmadi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/majdiahmadi' },
      { icon: { svg: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 13.5 11 16l5-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }, link: 'https://www.credly.com/users/majdi-ahmadi' },
      { icon: { svg: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' }, link: 'mailto:majdiahmadi05@gmail.com' }
    ],
    footer: {
      message: 'Majdi Ahmadi Bin Mohd Zohdi',
      copyright: 'Contact: majdiahmadi05@gmail.com'
    }
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap' }],
    ['style', {}, `
:root {
  --vp-c-bg: #05070A;
  --vp-c-bg-alt: #05070A;
  --vp-c-bg-elv: #0D1117;
  --vp-c-bg-soft: #0D1117;
  --vp-c-border: #1F2937;
  --vp-c-divider: #1F2937;
  --vp-c-brand-1: #38BDF8;
  --vp-c-brand-2: #38BDF8;
  --vp-c-brand-3: #0EA5E9;
  --vp-font-family-base: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --vp-font-family-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
}
html.dark { color-scheme: dark; }
body { background: #05070A; }
.VPNav, .VPNavBar, .VPNavBar.has-sidebar .content, .VPFooter { background: #05070A !important; border-color: #1F2937 !important; }
.VPContent { background: #05070A; }
.VPDoc:not(.has-sidebar) .content { max-width: 1120px; }
.VPDoc:not(.has-sidebar) .content-container { max-width: 1120px; }
.vp-doc h1, .vp-doc h2, .vp-doc h3 { letter-spacing: 0; }
.vp-doc a { color: #38BDF8; text-decoration: none; }
.hero { padding: 80px 0 44px; border-bottom: 1px solid #1F2937; }
.hero h1 { margin: 0; max-width: 880px; font-size: clamp(42px, 7vw, 78px); line-height: .96; letter-spacing: 0; }
.eyebrow, .project-meta, .stat-label, .timeline span { margin: 0 0 12px; color: #94A3B8; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0; }
.tagline { margin: 22px 0 0; max-width: 720px; color: #CBD5E1; font-size: 20px; line-height: 1.6; }
.hero-actions, .action-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
.button, .action-row a { display: inline-flex; align-items: center; min-height: 40px; padding: 0 14px; border: 1px solid #1F2937; border-radius: 6px; background: #0D1117; color: #E5E7EB !important; font-weight: 600; }
.button.primary { border-color: #38BDF8; color: #05070A !important; background: #38BDF8; }
.stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; margin: 34px 0; }
.stats-grid.compact { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.stat-card, .project-card, .skill-proof-grid article, .timeline article { border: 1px solid #1F2937; border-radius: 8px; background: #0D1117; padding: 20px; }
.stat-value { display: block; color: #F8FAFC; font-size: 34px; font-weight: 800; line-height: 1; }
.focus-strip { display: flex; flex-wrap: wrap; gap: 10px; margin: 26px 0 34px; }
.focus-strip span, .tag-row span { border: 1px solid #1F2937; border-radius: 999px; background: #0D1117; color: #BAE6FD; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; padding: 7px 10px; }
.project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; margin: 20px 0 34px; }
.project-grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.project-card h3 { margin: 0 0 12px; color: #F8FAFC; font-size: 20px; }
.project-card p { color: #CBD5E1; line-height: 1.65; }
.tag-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.contact-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 16px; }
.contact-grid a { border: 1px solid #1F2937; border-radius: 8px; background: #0D1117; padding: 16px; font-weight: 600; }
.timeline { display: grid; gap: 14px; margin: 20px 0 34px; }
.timeline h3, .skill-proof-grid h3 { margin: 0 0 10px; }
.skill-proof-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin: 20px 0 34px; }
.skill-proof-grid span { color: #94A3B8; font-size: 14px; }
.resume-strip { display: flex; align-items: center; justify-content: space-between; gap: 20px; border: 1px solid #1F2937; border-radius: 8px; background: #0D1117; padding: 24px; margin: 20px 0 34px; }
.resume-strip h2 { margin: 0; border: 0; padding: 0; }
.detail-header { border-bottom: 1px solid #1F2937; padding-bottom: 24px; margin-bottom: 26px; }
.screenshot-placeholder { border: 1px dashed #334155; border-radius: 8px; background: #0D1117; padding: 28px; color: #94A3B8; text-align: center; }
@media (max-width: 900px) {
  .stats-grid, .stats-grid.compact, .project-grid, .project-grid.two, .contact-grid, .skill-proof-grid { grid-template-columns: 1fr; }
  .hero { padding-top: 46px; }
  .resume-strip { align-items: flex-start; flex-direction: column; }
}
    `]
  ]
})
