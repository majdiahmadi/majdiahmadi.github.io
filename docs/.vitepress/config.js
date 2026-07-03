import { defineConfig } from 'vitepress'

const credlyIcon = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.76 1.68c-.62 0-1.25.16-1.8.47L4.11 5.61c-1.09.63-1.77 1.77-1.77 3.07v6.64c0 1.3.68 2.44 1.77 3.07l5.85 3.57c.55.33 1.18.5 1.8.5s1.25-.17 1.8-.5l5.85-3.57c1.09-.63 1.77-1.77 1.77-3.07V8.68c0-1.3-.68-2.44-1.77-3.07L13.56 2.15c-.55-.31-1.18-.47-1.8-.47zm0 2.24c.3 0 .6.08.84.22l3.34 2.04-4.18 2.69-4.18-2.69 3.34-2.04c.24-.14.54-.22.84-.22zm-4.68 4.98 4.68 3.01v8.07l-3.91-2.39c-.52-.32-.85-.87-.85-1.52V9.71c0-.28.03-.52.08-.81zm9.36 0c.05.29.08.53.08.81v5.36c0 .65-.33 1.2-.85 1.52l-3.91 2.39v-8.07l4.68-3.01z"/></svg>'
const gmailIcon = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>'

export default defineConfig({
  title: 'Majdi Ahmadi',
  description: 'Cybersecurity portfolio of Majdi Ahmadi, an IIUM Security in Digital Systems student focused on malware analysis, network defense, applied cryptography, and security monitoring.',
  base: '/',
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ['meta', { name: 'theme-color', content: '#05070A' }],
    ['style', {}, `
      :root {
        --vp-c-brand-1: #38BDF8;
        --vp-c-brand-2: #7DD3FC;
        --vp-c-brand-3: #0EA5E9;
        --vp-c-brand-soft: rgba(56, 189, 248, 0.14);
        --vp-font-family-base: Inter, Geist, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --vp-font-family-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
      }

      .dark {
        --vp-c-bg: #05070A;
        --vp-c-bg-alt: #080B10;
        --vp-c-bg-elv: #0D1117;
        --vp-c-bg-soft: #0D1117;
        --vp-c-text-1: #F8FAFC;
        --vp-c-text-2: #CBD5E1;
        --vp-c-text-3: #94A3B8;
        --vp-c-divider: #1F2937;
        --vp-c-gutter: #1F2937;
        --vp-code-block-bg: #0D1117;
        --vp-code-bg: rgba(56, 189, 248, 0.1);
      }

      html:not(.dark) {
        --vp-c-brand-1: #0284C7;
        --vp-c-brand-2: #0369A1;
        --vp-c-brand-3: #38BDF8;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background:
          radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.16) 1px, transparent 0),
          var(--vp-c-bg);
        background-size: 28px 28px;
      }

      a {
        text-underline-offset: 4px;
      }

      .VPNav {
        border-bottom: 1px solid var(--vp-c-divider);
        background: rgba(5, 7, 10, 0.88);
        backdrop-filter: blur(14px);
      }

      .VPFooter {
        border-top: 1px solid var(--vp-c-divider);
        background: #05070A;
      }

      .VPHome {
        margin-bottom: 0;
      }

      .vp-doc {
        max-width: 1160px;
      }

      .vp-doc h1,
      .vp-doc h2,
      .vp-doc h3 {
        letter-spacing: 0;
      }

      .vp-doc h2 {
        margin-top: 58px;
        border-top: 1px solid var(--vp-c-divider);
        padding-top: 28px;
      }

      .vp-doc p {
        line-height: 1.75;
      }

      .page-brief,
      .research-note,
      .signal-panel,
      .stat-card,
      .project-card,
      .timeline-content,
      .skill-panel,
      .terminal-card {
        border: 1px solid #1F2937;
        border-radius: 16px;
        background: #0D1117;
        box-shadow: none;
      }

      .signature-hero {
        display: grid;
        grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
        gap: clamp(24px, 5vw, 58px);
        align-items: center;
        min-height: calc(100vh - 176px);
        padding: clamp(46px, 8vw, 92px) 0 clamp(32px, 6vw, 70px);
      }

      .hero-kicker,
      .project-meta,
      .eyebrow,
      .terminal-bar,
      .timeline-date,
      .stat-label,
      .console-line {
        font-family: var(--vp-font-family-mono);
      }

      .hero-kicker,
      .eyebrow {
        display: inline-flex;
        width: fit-content;
        border: 1px solid rgba(56, 189, 248, 0.32);
        border-radius: 999px;
        background: rgba(56, 189, 248, 0.08);
        color: #38BDF8;
        font-size: 12px;
        line-height: 1.2;
        padding: 8px 12px;
      }

      .hero-title {
        margin: 24px 0 16px;
        max-width: 830px;
        color: var(--vp-c-text-1);
        font-size: clamp(46px, 8.8vw, 108px);
        font-weight: 780;
        line-height: 0.92;
        letter-spacing: 0;
      }

      .hero-title .glitch {
        color: var(--vp-c-text-1);
      }

      .hero-title .glitch::before,
      .hero-title .glitch::after {
        display: none;
      }

      .hero-copy {
        max-width: 720px;
        color: var(--vp-c-text-2);
        font-size: clamp(17px, 2vw, 21px);
      }

      .hero-actions,
      .terminal-actions,
      .project-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 24px;
      }

      .cyber-button,
      .project-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        border: 1px solid #1F2937;
        border-radius: 8px;
        background: #0D1117;
        color: var(--vp-c-text-1);
        font-weight: 700;
        line-height: 1.2;
        padding: 10px 14px;
        text-decoration: none;
        transition: border-color 160ms ease, background 160ms ease, color 160ms ease;
      }

      .cyber-button.primary,
      .project-links a:first-child {
        border-color: #38BDF8;
        background: #38BDF8;
        color: #020617;
      }

      .cyber-button:hover,
      .project-links a:hover {
        border-color: #38BDF8;
        background: rgba(56, 189, 248, 0.1);
        color: #E0F2FE;
        text-decoration: none;
      }

      .cyber-button.primary:hover,
      .project-links a:first-child:hover {
        background: #7DD3FC;
        color: #020617;
      }

      .terminal-card {
        overflow: hidden;
      }

      .terminal-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid #1F2937;
        color: var(--vp-c-text-3);
        font-size: 12px;
        padding: 12px 14px;
      }

      .terminal-dot {
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: #38BDF8;
        box-shadow: 14px 0 #64748B, 28px 0 #22C55E;
      }

      .terminal-body {
        display: grid;
        gap: 12px;
        padding: 22px;
      }

      .console-line {
        color: var(--vp-c-text-2);
        font-size: 13px;
        line-height: 1.65;
      }

      .console-line strong,
      .console-line span {
        color: #38BDF8;
      }

      .stats-grid,
      .project-grid,
      .signal-grid,
      .research-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        margin: 28px 0;
      }

      .project-grid {
        gap: 24px;
        margin: 36px 0 54px;
      }

      .signal-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .stats-grid.compact {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .stat-card {
        min-height: 132px;
        padding: 22px;
      }

      .stat-value {
        display: block;
        color: #38BDF8;
        font-family: var(--vp-font-family-mono);
        font-size: clamp(24px, 3vw, 34px);
        font-weight: 800;
        letter-spacing: 0;
      }

      .stat-label {
        display: block;
        margin-top: 10px;
        color: var(--vp-c-text-2);
        font-size: 13px;
        line-height: 1.5;
      }

      .focus-strip,
      .tag-row {
        display: flex;
        flex-wrap: wrap;
        gap: 9px;
        margin: 18px 0;
      }

      .focus-strip span,
      .tag-row span {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        border: 1px solid #1F2937;
        border-radius: 999px;
        background: rgba(148, 163, 184, 0.08);
        color: var(--vp-c-text-1);
        font-family: var(--vp-font-family-mono);
        font-size: 12px;
        line-height: 1.3;
        padding: 5px 10px;
      }

      .page-brief,
      .research-note,
      .signal-panel {
        padding: 22px;
      }

      .page-brief {
        margin: 28px 0 42px;
      }

      .project-card {
        min-width: 0;
        overflow: hidden;
        border-color: rgba(148, 163, 184, 0.18);
        border-radius: 12px;
        background: rgba(13, 17, 23, 0.68);
        padding: 28px;
        transition: border-color 160ms ease, background 160ms ease;
      }

      .project-card:hover {
        border-color: rgba(56, 189, 248, 0.34);
        background: rgba(17, 24, 39, 0.74);
      }

      .project-card h3 {
        margin: 12px 0 8px;
        color: var(--vp-c-text-1);
        font-size: 19px;
        line-height: 1.25;
      }

      .project-card p {
        margin: 8px 0 0;
        color: var(--vp-c-text-2);
        font-size: 14px;
        line-height: 1.55;
      }

      .project-meta {
        color: rgba(125, 211, 252, 0.82);
        font-size: 11px;
        line-height: 1.5;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .project-card .tag-row {
        gap: 8px;
        margin: 18px 0 0;
      }

      .project-card .tag-row span {
        min-height: 24px;
        border-color: rgba(148, 163, 184, 0.18);
        background: rgba(148, 163, 184, 0.06);
        color: var(--vp-c-text-2);
        font-size: 11px;
        padding: 4px 8px;
      }

      .project-card .project-links {
        align-items: center;
        flex-wrap: nowrap;
        gap: 14px;
        margin-top: 22px;
      }

      .project-card .project-links a {
        min-height: auto;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: rgba(125, 211, 252, 0.88);
        font-size: 13px;
        font-weight: 650;
        padding: 0;
      }

      .project-card .project-links a:first-child {
        border: 0;
        background: transparent;
        color: rgba(125, 211, 252, 0.88);
      }

      .project-card .project-links a:hover,
      .project-card .project-links a:first-child:hover {
        background: transparent;
        color: #E0F2FE;
        text-decoration: underline;
      }

      .timeline {
        display: grid;
        gap: 18px;
        margin: 28px 0;
      }

      .timeline-item {
        display: grid;
        grid-template-columns: 142px minmax(0, 1fr);
        gap: 18px;
        align-items: start;
      }

      .timeline-date {
        position: sticky;
        top: 86px;
        border-left: 2px solid #38BDF8;
        color: #38BDF8;
        font-size: 13px;
        padding: 8px 0 8px 14px;
      }

      .timeline-content,
      .skill-panel {
        padding: 22px;
      }

      .timeline-content h3,
      .skill-panel h3,
      .signal-panel h3,
      .research-note h3 {
        margin-top: 0;
      }

      .skill-panel h3:not(:first-child) {
        margin-top: 28px;
      }

      .proof-list {
        display: grid;
        gap: 14px;
        margin: 18px 0 0;
        padding: 0;
        list-style: none;
      }

      .proof-list li {
        border-top: 1px solid var(--vp-c-divider);
        color: var(--vp-c-text-2);
        padding-top: 14px;
      }

      .proof-list li:first-child {
        border-top: 0;
        padding-top: 0;
      }

      .proof-list strong {
        color: var(--vp-c-text-1);
      }

      .VPSocialLink:hover {
        color: #38BDF8;
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          scroll-behavior: auto !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      @media (max-width: 1040px) {
        .signature-hero,
        .stats-grid,
        .project-grid,
        .research-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .signal-grid,
        .stats-grid.compact {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 720px) {
        .signature-hero,
        .stats-grid,
        .stats-grid.compact,
        .signal-grid,
        .research-grid,
        .timeline-item {
          grid-template-columns: 1fr;
        }

        .project-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .signature-hero {
          min-height: auto;
          padding-top: 34px;
        }

        .hero-title {
          font-size: clamp(42px, 16vw, 68px);
        }

        .terminal-body,
        .project-card,
        .stat-card,
        .timeline-content,
        .skill-panel,
        .page-brief,
        .research-note,
        .signal-panel {
          padding: 18px;
        }

        .project-card .project-links {
          flex-wrap: wrap;
        }

        .timeline-date {
          position: static;
          border-left: 0;
          border-bottom: 1px solid var(--vp-c-divider);
          padding: 0 0 8px;
        }
      }
    `],
  ],
  themeConfig: {
    logo: {
      light: '/logo.svg',
      dark: '/logo.svg',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Experience', link: '/experience' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/majdiahmadi' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/majdiahmadi' },
      { icon: { svg: credlyIcon }, link: 'https://www.credly.com/users/majdi-ahmadi' },
      { icon: { svg: gmailIcon }, link: 'mailto:majdiahmadi05@gmail.com' },
    ],
    footer: {
      message: 'Cybersecurity portfolio for malware analysis, network defense, and applied cryptography.',
      copyright: 'Majdi Ahmadi | majdiahmadi05@gmail.com | GitHub: majdiahmadi | LinkedIn: majdiahmadi',
    },
  },
})
