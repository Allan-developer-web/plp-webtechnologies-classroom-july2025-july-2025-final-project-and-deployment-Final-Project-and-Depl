# Deployment Link 

https://allan-developer-web.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/

# 📑 Table of Contents

## Project Overview

Features

Project Structure

Pages & Layout

Styling (CSS)

Interactivity (JavaScript)

Responsive Design

Form Validation & Success Flow

How to Run

Customization Guide

Validation & Testing

Future Improvements

# 🚀 Project Overview

A fully responsive product showcase website built with HTML5, CSS3, and JavaScript.
This project demonstrates semantic HTML structure, modern CSS styling (including animations, flex/grid layouts), and interactive JavaScript (form validation, animated navigation, and dynamic content).

# ✨ Features

Consistent Header & Footer across all pages.

Sticky header that remains at the top while scrolling.

Responsive navigation with a hamburger menu on smaller screens.

Hero section with product highlight and CTA buttons.

Product cards styled with shadows, hover effects, and images.

Contact form with inline validation and error messages.

Form success animation:

Form fades out.

Thank-you message fades in.

Includes a "Send Another Message" button to reset the form.

On-scroll animations for smooth content appearance.

Sticky footer that always sits at the bottom.

# 📂 Project Structure
product-showcase/
│
├── index.html          # Home page
├── about.html          # About page
├── products.html       # Products/Services page
├── contact.html        # Contact form page
│
├── css/
│   └── style.css       # Main stylesheet
│
├── js/
│   └── main.js         # JavaScript interactivity
│
├── images/             # Placeholder or real product images
│
└── README.md           # Documentation (this file)

# 🖼️ Pages & Layout
## 1. Home (index.html)

Hero section with headline, intro text, CTA buttons.

Grid layout with product highlights.

Smooth entrance animations.

## 2. About (about.html)

Company introduction.

Mission/vision sections with text and images.

## 3. Products (products.html)

Product cards styled with shadows and hover effects.

Grid layout for multiple products.

## 4. Contact (contact.html)

Styled form with inputs: Name, Email, Message.

Inline validation (required fields, valid email check).

Success animation and reset button.

## 5. Shared Layout

Header: Logo + Navigation links (Home, About, Products, Contact).

Footer: Company name + dynamic year, social/contact links.

🎨 Styling (CSS)

Global reset with box-sizing: border-box.

Flexbox/Grid layouts for sections and cards.

Responsive typography and button styles.

Animations:

.animate-on-scroll: fade and slide in as user scrolls.

Transition effects on hover for buttons and cards.

Sticky footer: ensures footer stays at bottom of viewport.

Form styling:

Clean labels and inputs.

Focus states with border + shadow highlight.

Styled submit button with hover states.

Error messages styled in red.

Success message styled in green with fade-in.

# ⚡ Interactivity (JavaScript)

Dynamic Year

Updates footer year automatically.

Responsive Navigation

Hamburger toggle button for mobile view.

Expands/collapses nav links with aria-expanded attribute.

Scroll Animations

Uses IntersectionObserver to reveal elements with .animate-on-scroll.

Form Validation

Checks for:

Non-empty Name field.

Valid Email format.

Non-empty Message.

Displays inline error messages below inputs.

Highlights invalid inputs with red borders.

Form Success Animation

If valid: form fades out → thank-you message fades in.

A "Send Another Message" button lets users reset and resubmit.

# 📱 Responsive Design

Mobile-first approach.

Breakpoints:

max-width: 768px:

Navigation collapses into hamburger menu.

Hero grid stacks vertically.

Cards adjust to single column.

# 📝 Form Validation & Success Flow

User submits form.

JS checks fields:

Empty name → error message.

Invalid email → error message.

Empty message → error message.

If all fields valid:

Form fades out smoothly (opacity → 0).

After 600ms, form is hidden and replaced with:

✅ Green thank-you message.

✅ Reset button ("Send Another Message").

Clicking reset button:

Clears thank-you message.

Resets form values.

Displays form again.

# ▶️ How to Run

Download the project folder.

Open index.html in any modern browser.

Navigate using header links.

Test responsiveness by resizing the browser or opening on a mobile device.

# 🛠️ Customization Guide

Colors & Theme:
Edit in style.css. Example:

:root {
  --primary-color: #0077cc;
  --secondary-color: #005fa3;
}


Images:
Replace placeholders in /images/ with product photos.

Form Backend:
Currently, the form is front-end only.

To handle real submissions, connect to:

Email service (e.g., Formspree, Netlify Forms).

Backend server with PHP/Node/Python.

Animations:
Adjust timing in style.css and main.js.

# ✅ Validation & Testing

Run W3C HTML Validator
 on .html files.

Run W3C CSS Validator
 on style.css.

Test responsiveness:

Chrome DevTools → Device Toolbar.

Resize to phone, tablet, and desktop sizes.

# 🔮 Future Improvements

Dark mode toggle.

Product detail modal/pop-up.

Carousel for gallery section.

Form backend integration (real submissions).

Accessibility improvements (ARIA labels, focus management).

