import { defineConfig } from 'vitepress'

const credlyIcon = '<svg fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path fill="var(--vp-c-bg)" d="M8.1 12.2 10.6 14.7 16.4 8.9 17.8 10.3 10.6 17.5 6.7 13.6z"/></svg>'
const emailIcon = '<svg fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.8 7 8.2 6 8.2-6"/></svg>'

export default defineConfig({
  title: 'Majdi Ahmadi | Cybersecurity Portfolio',
  description: 'Cybersecurity portfolio of Majdi Ahmadi, an IIUM Security in Digital Systems student focused on malware analysis, network security, cryptography, and secure systems.',
  base: '/',
  cleanUrls: true,
  appearance: 'dark',
  head: [
    ['meta', { name: 'theme-color', content: '#06100d' }],
    ['style', {}, `
      :root {
        --vp-c-brand-1: #00b879;
        --vp-c-brand-2: #00df91;
        --vp-c-brand-3: #0aff9d;
        --vp-c-brand-soft: rgba(10, 255, 157, 0.14);
        --vp-font-family-base: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --vp-font-family-mono: "JetBrains Mono", "SFMono-Regular", Consolas, "Liberation Mono", monospace;
      }

      .dark {
        --vp-c-bg: #06100d;
        --vp-c-bg-alt: #091713;
        --vp-c-bg-elv: #0c1d18;
        --vp-c-bg-soft: #0f221d;
        --vp-c-text-1: #effff8;
        --vp-c-text-2: #b7d3c9;
        --vp-c-text-3: #7f9d93;
        --vp-c-divider: rgba(140, 255, 215, 0.15);
        --vp-c-gutter: rgba(140, 255, 215, 0.12);
        --vp-code-block-bg: #050d0a;
        --vp-code-bg: rgba(10, 255, 157, 0.11);
      }

      html:not(.dark) {
        --vp-c-brand-1: #007c55;
        --vp-c-brand-2: #00a36d;
        --vp-c-brand-3: #00c984;
        --vp-c-brand-soft: rgba(0, 163, 109, 0.13);
        --vp-c-bg: #f7fbf9;
        --vp-c-bg-alt: #eef7f3;
        --vp-c-bg-soft: #edf8f4;
        --vp-c-text-1: #0b1d18;
        --vp-c-text-2: #334e45;
        --vp-c-divider: rgba(0, 124, 85, 0.18);
      }

      * {
        box-sizing: border-box;
      }

      body {
        background:
          linear-gradient(180deg, rgba(10, 255, 157, 0.07), transparent 420px),
          radial-gradient(circle at top right, rgba(94, 231, 255, 0.11), transparent 360px),
          var(--vp-c-bg);
      }

      body::before {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        content: "";
        background-image:
          linear-gradient(rgba(140, 255, 215, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(140, 255, 215, 0.055) 1px, transparent 1px);
        background-size: 44px 44px;
        mask-image: linear-gradient(to bottom, black 0%, transparent 72%);
      }

      a {
        text-underline-offset: 4px;
      }

      .VPNav {
        border-bottom: 1px solid rgba(140, 255, 215, 0.09);
        backdrop-filter: blur(18px);
      }

      .VPFooter {
        border-top: 1px solid var(--vp-c-divider);
        background: linear-gradient(180deg, transparent, rgba(10, 255, 157, 0.04));
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
      .skill-panel {
        border: 1px solid var(--vp-c-divider);
        background:
          linear-gradient(145deg, rgba(10, 255, 157, 0.08), rgba(94, 231, 255, 0.035) 45%, rgba(255, 56, 100, 0.035)),
          rgba(8, 22, 18, 0.78);
        box-shadow: 0 22px 70px rgba(0, 0, 0, 0.22);
        backdrop-filter: blur(10px);
      }

      .signature-hero {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1.25fr) minmax(300px, 0.75fr);
        gap: clamp(24px, 5vw, 58px);
        align-items: center;
        min-height: calc(100vh - 176px);
        padding: clamp(46px, 8vw, 92px) 0 clamp(32px, 6vw, 70px);
        overflow: hidden;
      }

      .signature-hero::before {
        position: absolute;
        inset: 18px 0 auto;
        height: 1px;
        content: "";
        background: linear-gradient(90deg, transparent, var(--vp-c-brand-3), rgba(94, 231, 255, 0.72), transparent);
        opacity: 0.8;
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
        border: 1px solid rgba(10, 255, 157, 0.28);
        border-radius: 999px;
        background: rgba(10, 255, 157, 0.08);
        color: var(--vp-c-brand-3);
        font-size: 12px;
        line-height: 1.2;
        padding: 8px 12px;
      }

      .hero-title {
        position: relative;
        margin: 24px 0 16px;
        max-width: 830px;
        color: var(--vp-c-text-1);
        font-size: clamp(46px, 8.8vw, 108px);
        font-weight: 780;
        line-height: 0.92;
        letter-spacing: 0;
      }

      .hero-title .glitch {
        position: relative;
        display: inline-block;
        color: transparent;
        background: linear-gradient(110deg, #f1fff9 0%, #0aff9d 52%, #5ee7ff 100%);
        -webkit-background-clip: text;
        background-clip: text;
      }

      .hero-title .glitch::before,
      .hero-title .glitch::after {
        position: absolute;
        inset: 0;
        content: attr(data-text);
        opacity: 0;
      }

      .hero-title .glitch::before {
        color: #5ee7ff;
        transform: translate(2px, 0);
      }

      .hero-title .glitch::after {
        color: #ff3864;
        transform: translate(-2px, 0);
      }

      .signature-hero:hover .glitch::before,
      .signature-hero:hover .glitch::after {
        animation: glitch-shift 700ms steps(2, end) 1;
      }

      .hero-copy {
        max-width: 720px;
        color: var(--vp-c-text-2);
        font-size: clamp(17px, 2vw, 21px);
      }

      .hero-actions,
      .terminal-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 28px;
      }

      .cyber-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        border: 1px solid rgba(10, 255, 157, 0.34);
        border-radius: 8px;
        color: var(--vp-c-text-1);
        font-weight: 700;
        line-height: 1.2;
        padding: 11px 16px;
        text-decoration: none;
        transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
      }

      .cyber-button.primary {
        background: var(--vp-c-brand-3);
        color: #04100c;
        box-shadow: 0 0 34px rgba(10, 255, 157, 0.26);
      }

      .cyber-button:hover {
        border-color: var(--vp-c-brand-3);
        background: rgba(10, 255, 157, 0.1);
        transform: translateY(-2px);
        text-decoration: none;
      }

      .cyber-button.primary:hover {
        background: #5effbd;
      }

      .terminal-card {
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(140, 255, 215, 0.2);
        border-radius: 8px;
        background: rgba(3, 11, 8, 0.86);
        box-shadow: 0 28px 90px rgba(0, 0, 0, 0.32);
      }

      .terminal-card::after {
        position: absolute;
        inset: 0;
        pointer-events: none;
        content: "";
        background: linear-gradient(transparent 50%, rgba(10, 255, 157, 0.035) 50%);
        background-size: 100% 8px;
        opacity: 0.5;
      }

      .terminal-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        border-bottom: 1px solid rgba(140, 255, 215, 0.14);
        color: var(--vp-c-text-3);
        font-size: 12px;
        padding: 12px 14px;
      }

      .terminal-dot {
        width: 9px;
        height: 9px;
        border-radius: 999px;
        background: var(--vp-c-brand-3);
        box-shadow: 14px 0 #5ee7ff, 28px 0 #ff3864;
      }

      .terminal-body {
        position: relative;
        z-index: 1;
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
        color: var(--vp-c-brand-3);
      }

      .type-command {
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        border-right: 2px solid var(--vp-c-brand-3);
        color: var(--vp-c-brand-3);
        vertical-align: bottom;
        white-space: nowrap;
        animation: typing 3.2s steps(34, end) infinite alternate, caret 900ms step-end infinite;
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

      .signal-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .stats-grid.compact {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }

      .stat-card,
      .project-card,
      .signal-panel,
      .research-note,
      .timeline-content,
      .skill-panel,
      .page-brief {
        border-radius: 8px;
      }

      .stat-card {
        min-height: 132px;
        padding: 22px;
      }

      .stat-value {
        display: block;
        color: var(--vp-c-brand-3);
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
        border: 1px solid rgba(10, 255, 157, 0.24);
        border-radius: 999px;
        background: rgba(10, 255, 157, 0.075);
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
        margin: 24px 0 34px;
      }

      .project-card {
        position: relative;
        min-width: 0;
        overflow: hidden;
        padding: 22px;
        transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
      }

      .project-card::before {
        position: absolute;
        inset: 0 auto 0 0;
        width: 3px;
        content: "";
        background: linear-gradient(var(--vp-c-brand-3), #5ee7ff, #ff3864);
        opacity: 0.7;
      }

      .project-card:hover {
        border-color: rgba(10, 255, 157, 0.42);
        box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28), 0 0 30px rgba(10, 255, 157, 0.08);
        transform: translateY(-4px);
      }

      .project-card h3 {
        margin: 10px 0 10px;
        color: var(--vp-c-text-1);
        font-size: 20px;
        line-height: 1.25;
      }

      .project-card p {
        margin: 10px 0;
        color: var(--vp-c-text-2);
      }

      .project-meta {
        color: var(--vp-c-brand-3);
        font-size: 12px;
        line-height: 1.55;
      }

      .project-contribution {
        border-top: 1px solid var(--vp-c-divider);
        padding-top: 14px;
        font-size: 14px;
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
        border-left: 2px solid var(--vp-c-brand-3);
        color: var(--vp-c-brand-3);
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

      .VPSocialLink:hover {
        color: var(--vp-c-brand-3);
      }

      @keyframes typing {
        from { width: 13ch; }
        to { width: 34ch; }
      }

      @keyframes caret {
        50% { border-color: transparent; }
      }

      @keyframes glitch-shift {
        0%, 100% { opacity: 0; clip-path: inset(0 0 0 0); }
        15% { opacity: 0.75; clip-path: inset(12% 0 62% 0); }
        35% { opacity: 0.55; clip-path: inset(68% 0 10% 0); }
        58% { opacity: 0.7; clip-path: inset(38% 0 35% 0); }
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
        .project-grid,
        .signal-grid,
        .research-grid,
        .timeline-item {
          grid-template-columns: 1fr;
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

        .timeline-date {
          position: static;
          border-left: 0;
          border-bottom: 1px solid var(--vp-c-divider);
          padding: 0 0 8px;
        }

        .type-command {
          animation: none;
          border-right: 0;
          white-space: normal;
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
      { icon: { svg: emailIcon }, link: 'mailto:majdiahmadi05@gmail.com' },
    ],
    footer: {
      message: 'Cybersecurity portfolio for malware analysis, secure systems, and network defense.',
      copyright: 'Majdi Ahmadi | majdiahmadi05@gmail.com | GitHub: majdiahmadi | LinkedIn: majdiahmadi',
    },
  },
})
