# Neexa EV — Landing Page

A modern, premium, and fully responsive landing page for Neexa EV built with React JS and Tailwind CSS.

## Tech Stack
- **React 18** (functional components + hooks)
- **Tailwind CSS v3** (utility-first styling)
- **Framer Motion** (animations)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky navbar with mobile menu + dark mode toggle
│   ├── Hero.jsx         # Hero section with animated scooter SVG
│   ├── Models.jsx       # 11-model showcase grid with filter tabs
│   ├── Features.jsx     # 6 feature cards with icons
│   ├── Finance.jsx      # EMI plans + Bajaj Finserv partner card
│   ├── WhyUs.jsx        # 4 reasons + key stats
│   ├── Testimonials.jsx # 6 customer review cards
│   ├── Contact.jsx      # Book Test Ride form
│   └── Footer.jsx       # Links, socials, copyright
├── App.js               # Root component, dark mode state
├── index.js             # React entry point
└── index.css            # Global styles + Tailwind directives
```

## Deploy to Render

1. Push to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
5. Click Deploy

## Sections
1. Navbar — Logo, Nav Links, CTA, Dark Mode Toggle
2. Hero — Headline, CTA buttons, animated EV SVG, stats
3. Models — 11 EV models with specs and booking CTA
4. Features — Battery, Range, Fast Charge, Smart Connect, BLDC, IP67
5. Finance — EMI plans + Bajaj Finserv partnership
6. Why Us — Eco-friendly, Cost Saving, Performance, Warranty
7. Testimonials — 6 verified customer reviews
8. Contact — Booking form with model selector
9. Footer — Links, social icons, copyright
