# Little Lemon Restaurant

**Front-End Developer Capstone Project** — Meta Professional Certificate on Coursera

A responsive React web application for the Little Lemon Mediterranean restaurant in Chicago. Features a fully functional home page and a table reservation system with real-time validation and accessibility support.

---

## Preview

| Home Page | Reservations |
|-----------|-------------|
| Hero section, weekly specials, testimonials, about | Booking form with validation + confirmation page |

---

## Features

- **Home Page** — Hero, weekly specials, customer testimonials, and about section
- **Table Reservations** — Full booking form with dynamic time slots
- **Form Validation** — Real-time client-side validation with meaningful error messages
- **Accessible** — ARIA labels, semantic HTML, keyboard-navigable
- **Responsive** — Works on mobile, tablet, and desktop
- **Unit Tested** — 15+ tests covering components, form logic, and API functions

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI library (functional components + hooks) |
| CSS (component-scoped) | Styling |
| Jest + React Testing Library | Unit testing |
| Google Fonts (Markazi Text + Karla) | Typography |

---

# Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/little-lemon.git

# 2. Navigate into the project
cd lemon-app-meta-main

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open automatically on your web browser

---

## Running Tests

```bash
# Run all tests in watch mode
npm test

# Run tests once with coverage report
npm test -- --coverage --watchAll=false
```

---

## Production Build

```bash
npm run build
```

Creates an optimized production build in the `/build` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

---

## Project Structure

```
little-lemon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Nav.js / Nav.css           # Sticky responsive navigation
│   │   ├── Hero.js / Hero.css         # Landing hero section
│   │   ├── Specials.js / Specials.css # Weekly specials grid
│   │   ├── Testimonials.js / .css     # Customer reviews
│   │   ├── About.js / About.css       # Restaurant story
│   │   ├── BookingPage.js / .css      # Reservation form
│   │   ├── ConfirmationPage.js / .css # Booking confirmation
│   │   └── Footer.js / Footer.css     # Site footer
│   ├── App.js          # Root component + page routing + API simulation
│   ├── App.css
│   ├── App.test.js     # Unit tests
│   ├── index.js        # Entry point
│   └── index.css       # Global styles + CSS variables
├── package.json
└── README.md
```

---

## Form Validation Rules

| Field | Rules |
|-------|-------|
| Date | Required · Cannot be in the past |
| Time | Required · Loaded dynamically based on date |
| Guests | Required · Between 1 and 10 |
| First Name | Required |
| Last Name | Required |
| Email | Required · Must be valid format |
| Phone | Optional · Must be valid format if provided |
| Special Requests | Optional · Max 500 characters |

---

##  Accessibility

This project follows WCAG guidelines:

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA attributes on all interactive elements (`aria-label`, `aria-required`, `aria-invalid`, `aria-describedby`)
- `aria-live` regions for dynamic error messages
- Keyboard-navigable interface
- Sufficient color contrast ratios
- Descriptive `alt` text on all images

---

## Pages

| Route (state) | Description |
|---------------|-------------|
| `home` | Landing page with specials and testimonials |
| `reservations` | Table booking form |
| `confirmation` | Booking summary after successful submission |

> Navigation is handled via React state (no external router needed for this scope).

---

## 
This project was created as part of the **Meta Front-End Developer Professional Certificate** on Coursera and is intended for educational purposes.

---

