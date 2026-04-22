# Neexa EV - Landing Page

A modern, premium, fully responsive React landing page for an Electric Vehicle company.

## Tech Stack
- React 18 (functional components + hooks)
- Tailwind CSS v3
- Framer Motion (animations)
- CRA (Create React App)

## Sections
1. Navbar (with dark/light toggle + mobile menu)
2. Hero Section
3. Models Showcase (11 EV models)
4. Features Section
5. Finance / EMI Section (Bajaj Finserv)
6. Why Choose Us
7. Testimonials
8. Contact / Booking CTA
9. Footer

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

## Deploy on Render

1. Push to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Connect your GitHub repo
4. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
5. Click **Deploy**

## Environment

No environment variables required for basic deployment.

## Folder Structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Models.jsx
    Features.jsx
    Finance.jsx
    WhyUs.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
  App.js
  index.js
  index.css
  App.css
public/
  index.html
tailwind.config.js
postcss.config.js
```
