# ChatGPT Portfolio Feedback - All Improvements Needed

## DESIGN CHANGES
- Darker background: #05070A (almost black)
- Cards: #0D1117 with 1px #1F2937 border, 16px radius, no shadow
- Accent: BLUE #38BDF8 (replace green #0aff9d)
- Green only used sparingly as secondary
- Font: Inter/Geist for body, JetBrains Mono for code labels only
- No neon glow, no terminal green everywhere
- Style reference: GitHub dark mode, Vercel dark, Linear app, SOC dashboard
- Clean, professional, minimalist - not "hacker movie"

## CONTENT CHANGES

### 1. About Me - Rewrite to be sharper
Current: long paragraph mentioning many areas
New: "I am a second-year Bachelor of Computer Science student specializing in Security in Digital Systems at IIUM. My main interests are malware analysis, network defense, applied cryptography, and security monitoring. I use my portfolio to document academic projects, lab work, reports, and technical experiments. My goal is to build practical evidence that shows how I analyze threats, explain security concepts, and develop secure systems."

### 2. CCNA Wording Fix
Change "CCNA certified" to "Cisco Networking Academy: CCNA Introduction to Networks and Switching, Routing, and Wireless Essentials" - avoid implying full CCNA professional certification

### 3. Homepage CTA
Replace buttons with: "View Cybersecurity Projects", "Download Resume", "Contact Me"

### 4. ADD RESUME DOWNLOAD BUTTON
Add a "Download Resume" link/button on homepage and experience page
- Create placeholder: docs/resume.pdf (empty/dummy file - user will replace later)

### 5. REMOVE PHONE NUMBER
Remove +60 11-61665395 from public display. Keep only email, LinkedIn, GitHub.

### 6. ADD PROJECT BUTTONS/LINKS
For each of the 14 projects, add placeholder buttons:
- "View Report" → placeholder link (user will update)
- "View Code" → placeholder link
- "View Screenshots" → placeholder link
Format: use [View Report](#) | [View Code](#) style links inside project cards

### 7. CREATE INDIVIDUAL PROJECT PAGES
Add detailed pages for top projects at:
- docs/projects/malware-analysis-voicememo.md
- docs/projects/applied-cryptography.md
- docs/projects/docker-virtualization.md
- docs/projects/mips-heat-stroke.md
Each page format: Problem, Tools Used, My Contribution, Process/Methodology, Result/Output, Screenshots (placeholder), What I Learned

### 8. ADD SCREENSHOTS PLACEHOLDERS
Create docs/public/screenshots/ directory with placeholder info
Reference in project pages

### 9. FEATURED SKILLS WITH PROOF
Instead of just listing tools, connect them to projects:
Example: "Wireshark — Used in TLS handshake analysis and network monitoring labs."
Add this to experience.md skills section

### 10. ADD RESUME PDF PLACEHOLDER
Create docs/public/resume.pdf (placeholder - user will replace)

## IMPLEMENTATION
- Rewrite config.js: new dark palette (#05070A, #0D1117, #1F2937, blue accent #38BDF8), remove neon, minimal cards
- Rewrite index.md: new About Me, new CTA buttons, add resume download
- Rewrite projects.md: add project buttons to each card, keep all 14 projects
- Rewrite experience.md: fix CCNA wording, remove phone, add skills with proof
- Create 4 individual project pages
- Create placeholder resume PDF
- Create screenshots directory
