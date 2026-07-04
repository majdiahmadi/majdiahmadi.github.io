import { defineConfig } from 'vitepress'

const credlyIcon = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><image href="data:image/png;base64,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" width="24" height="24"/></svg>'
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
        text-decoration: none;
      }

      a:hover {
        text-decoration: none;
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        min-height: auto;
        padding: clamp(46px, 8vw, 92px) 0 clamp(32px, 6vw, 70px);
        max-width: 830px;
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
      message: 'Majdi Ahmadi Bin Mohd Zohdi',
      copyright: 'IIUM · Security in Digital Systems',
    },
  },
})
