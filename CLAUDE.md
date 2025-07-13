# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Shan Thomas, a molecular biologist and NGS specialist. The site is built with vanilla HTML, CSS, and JavaScript, using Tailwind CSS for styling and Font Awesome for icons.

## Architecture & Structure

### Core Files
- `index.html` - Main portfolio page with complete site content
- `assets/` - Static assets (images, icons)
- `old_version/` - Previous versions of the portfolio for reference
- `sitemap.xml` - SEO sitemap
- `googleaf7090b132beaf5d.html` - Google verification file

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Font Awesome 6.4.0 (via CDN)
- **Hosting**: GitHub Pages
- **Forms**: Formspree integration for contact form

### Key Features
- Responsive design with mobile navigation
- Dark/light mode toggle with localStorage persistence
- Smooth scrolling navigation
- CSS animations and transitions
- Contact form integration with Formspree
- SEO optimization with meta tags and sitemap

## Development Commands

This is a static website with no build process. Development workflow:

1. **Local Development**: Open `index.html` directly in browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Deployment**: Push to GitHub Pages (automatic deployment from main branch)

## Code Conventions

### HTML Structure
- Semantic HTML5 elements (`<section>`, `<nav>`, `<main>`, etc.)
- Accessibility considerations with proper ARIA labels
- Mobile-first responsive design

### CSS/Styling
- Tailwind CSS utility classes for styling
- Custom CSS for animations and unique elements in `<style>` tag
- Consistent color scheme: Orange/Purple themes with gray backgrounds
- Dark mode implementation via JavaScript class toggling

### JavaScript Patterns
- Event-driven architecture for interactions
- DOM manipulation for navigation and theme switching
- localStorage for user preferences
- Smooth scrolling implementation
- Mobile menu toggle functionality

## Important Implementation Details

### Dark Mode System
- Toggle buttons for both desktop and mobile
- Persistent storage using localStorage
- Complete theme switching including all UI elements
- Icon state management (moon/sun icons)

### Navigation System
- Fixed navigation with backdrop blur
- Active state management based on scroll position
- Mobile hamburger menu with proper state management
- Smooth scrolling to sections with offset for fixed header

### Form Integration
- Formspree endpoint
- Client-side form validation
- Accessible form design with proper labels

## File Modification Guidelines

When editing this project:

1. **HTML Changes**: The entire site is in `index.html` - maintain semantic structure
2. **Styling**: Use Tailwind classes consistently, avoid inline styles except for custom CSS
3. **JavaScript**: Keep functionality modular, maintain event listener patterns
4. **Assets**: Place new images in `assets/` directory, optimize for web
5. **Responsive Design**: Test changes across mobile, tablet, and desktop viewports

## Version History

- Current version: Modern responsive design with dark mode
- v1: Available in `old_version/` directory for reference
- Multiple iterations preserved in `old_version/old_version/` subdirectory
