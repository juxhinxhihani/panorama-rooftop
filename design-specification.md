# Panorama Rooftop - Design Specification for Figma

## Overview
This document provides a comprehensive design specification for the Panorama Rooftop website to help recreate the design in Figma.

## Brand Identity

### Logo
- **Primary Logo**: Circular badge with sunset scene, mountains, cocktail glass, and coffee cup
- **Colors**: Orange to yellow gradient background with dark teal accents
- **Typography**: "Panorama" in script font, "ROOFTOP" in bold sans-serif
- **Usage**: Header logo, favicon, brand elements

### Color Palette

#### Primary Colors
- **Orange**: #f97316 (Primary brand color)
- **Pink**: #ec4899 (Secondary brand color)
- **Dark Teal**: #1e3a8a (Logo accents)

#### Gradients
- **Primary Gradient**: `linear-gradient(to right, #f97316, #ec4899)`
- **Background Gradient**: `linear-gradient(to bottom right, #fff7ed, #fdf2f8)`
- **Logo Gradient**: `linear-gradient(to bottom, #f97316, #fbbf24)`

#### Neutral Colors
- **White**: #ffffff
- **Gray 50**: #f9fafb
- **Gray 100**: #f3f4f6
- **Gray 200**: #e5e7eb
- **Gray 300**: #d1d5db
- **Gray 400**: #9ca3af
- **Gray 600**: #4b5563
- **Gray 700**: #374151
- **Gray 800**: #1f2937
- **Gray 900**: #111827
- **Black**: #000000

### Typography

#### Font Family
- **Primary**: Geist Sans (system fallback: Arial, Helvetica, sans-serif)
- **Monospace**: Geist Mono (for code elements)

#### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

#### Typography Scale
- **H1**: 48px-64px, Bold, Line height: 1.1
- **H2**: 36px-48px, Bold, Line height: 1.2
- **H3**: 24px-32px, Bold, Line height: 1.3
- **H4**: 20px-24px, Semibold, Line height: 1.4
- **Body Large**: 18px-20px, Regular, Line height: 1.6
- **Body**: 16px, Regular, Line height: 1.5
- **Small**: 14px, Regular, Line height: 1.4
- **Caption**: 12px, Regular, Line height: 1.3

## Layout System

### Grid System
- **Max Width**: 1280px (7xl container)
- **Padding**: 16px mobile, 24px tablet, 32px desktop
- **Columns**: 12-column grid system
- **Gutters**: 24px

### Spacing System (8px base)
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 80px
- **5xl**: 96px

### Breakpoints
- **Mobile**: 0-767px
- **Tablet**: 768-1023px
- **Desktop**: 1024px+

## Component Specifications

### Header Component
- **Height**: 64px mobile, 80px desktop
- **Background**: Transparent on scroll top, white/95% opacity with backdrop blur when scrolled
- **Logo**: 40px height, gradient background
- **Navigation**: Hidden on mobile, visible on desktop
- **Language Selector**: Dropdown with flags and language codes
- **Mobile Menu**: Hamburger icon with animated states

### Hero Section
- **Height**: 100vh
- **Background**: Full-screen image with gradient overlay
- **Content**: Centered text with two CTA buttons
- **Scroll Indicator**: Animated down arrow at bottom

### About Section
- **Layout**: Two-column grid (text + image)
- **Image**: Rounded corners (16px), shadow
- **Floating Card**: Positioned absolutely, white background, shadow
- **Stats**: Two-column grid with large numbers

### Menu Section
- **Background**: Light gradient (orange to pink tint)
- **Cards**: White background, rounded corners (16px), shadow
- **Category Headers**: Gradient backgrounds matching brand colors
- **Items**: Hover states with background color change

### Contact Section
- **Background**: Dark gray (#111827)
- **Layout**: Two-column grid (contact info + form)
- **Contact Items**: Clickable with hover states
- **Form**: White background, rounded corners, focus states

### Footer
- **Background**: Dark gray (#111827)
- **Layout**: Three-column grid
- **Links**: Hover states with underlines

## Interactive Elements

### Buttons

#### Primary Button
- **Background**: Primary gradient
- **Text**: White, semibold
- **Padding**: 16px 32px
- **Border Radius**: 9999px (fully rounded)
- **Hover**: Darker gradient, scale 1.05
- **Shadow**: Medium shadow

#### Secondary Button
- **Background**: Transparent
- **Border**: 2px solid white
- **Text**: White, semibold
- **Padding**: 16px 32px
- **Border Radius**: 9999px
- **Hover**: White background, dark text

### Form Elements
- **Input Fields**: 
  - Border: 1px solid gray-300
  - Border Radius: 8px
  - Padding: 12px 16px
  - Focus: 2px orange ring, transparent border
- **Labels**: Small, medium weight, gray-700
- **Placeholders**: Gray-400

### Cards
- **Background**: White
- **Border Radius**: 16px
- **Shadow**: Subtle shadow
- **Hover**: Enhanced shadow
- **Padding**: 24px-32px

## Animation & Transitions

### Hover Effects
- **Duration**: 200ms
- **Easing**: ease-out
- **Scale**: 1.05 for buttons
- **Color Transitions**: All interactive elements

### Scroll Effects
- **Header**: Background opacity change
- **Smooth Scrolling**: Enabled for anchor links

### Mobile Menu
- **Animation**: slideDown keyframe
- **Duration**: 200ms
- **Backdrop**: Blur effect

## Responsive Design

### Mobile (0-767px)
- **Header**: Reduced height, hamburger menu
- **Hero**: Stacked content, smaller text
- **Sections**: Single column layouts
- **Padding**: Reduced spacing

### Tablet (768-1023px)
- **Header**: Full navigation visible
- **Sections**: Mixed layouts (some 2-column)
- **Cards**: Grid layouts with 2 columns

### Desktop (1024px+)
- **Header**: Full height and navigation
- **Sections**: Multi-column layouts
- **Cards**: 2-3 column grids
- **Hover Effects**: Full interaction states

## Assets Required

### Images
1. **Hero Background**: High-resolution rooftop/sunset image
2. **About Section**: Interior/view image
3. **Logo**: SVG format for scalability
4. **Favicon**: PNG format, multiple sizes

### Icons
- **Emojis**: Used for contact information and features
- **Arrow Icons**: For navigation and scroll indicators
- **Menu Icons**: Hamburger menu states

## Accessibility Considerations

### Color Contrast
- **Text on White**: Minimum 4.5:1 ratio
- **Text on Dark**: White text for maximum contrast
- **Interactive Elements**: Clear focus states

### Navigation
- **Keyboard Navigation**: Tab order and focus states
- **Screen Readers**: Proper ARIA labels
- **Mobile Touch**: Minimum 44px touch targets

## Multi-language Support

### Text Expansion
- **English**: Base language
- **Albanian (Shqip)**: ~20% longer text
- **Italian**: ~15% longer text
- **Layout**: Flexible containers to accommodate text length variations

### RTL Considerations
- Currently not required but layout should be flexible

## Implementation Notes for Figma

1. **Create Master Components**: Header, Footer, Cards, Buttons
2. **Use Auto Layout**: For responsive behavior
3. **Component Variants**: Different button states, card types
4. **Color Styles**: Define all brand colors as styles
5. **Text Styles**: Create typography scale as text styles
6. **Grid System**: Set up 12-column grid with proper gutters
7. **Breakpoint Frames**: Create frames for mobile, tablet, desktop
8. **Interactive Prototyping**: Link sections for navigation flow
9. **Component Library**: Organize all components in a separate page
10. **Design Tokens**: Document all spacing, colors, and typography values

This specification provides all the necessary information to recreate the Panorama Rooftop website design in Figma with pixel-perfect accuracy and proper component organization.