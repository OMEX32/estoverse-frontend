# ESTOVERSE React Project

A React conversion of the Estoverse tactical esports team management landing page.

## Project Structure

```
estoverse-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── ProblemSection.js
│   │   ├── FeaturesSection.js
│   │   ├── CTASection.js
│   │   ├── Footer.js
│   │   ├── Login.js
│   │   └── Register.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Login.css
│   │   └── Register.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Installation

1. Navigate to the project directory:
```bash
cd estoverse-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Components Overview

### Navigation
Fixed navigation bar with brand identity and action button. Uses React Router for navigation.

### Landing Page (/)
The main landing page includes:
- **Hero** - Main landing section with headline, stats, and tactical roster panel
- **ProblemSection** - Displays the four main problems the platform solves
- **FeaturesSection** - Showcases the four main feature systems with alternating layouts
- **CTASection** - Call-to-action section encouraging users to deploy
- **Footer** - Footer with links and brand information

### Login (/login)
Authentication page with:
- Security clearance banner with system status
- Login terminal with email/password authentication
- Social login options (Discord, Google)
- "Remember me" functionality
- Links to password recovery and registration

### Register (/register)
Multi-step registration page with:
- Clearance request banner with requirements and progress tracking
- Three-step registration form:
  1. Personal information (name, username, email)
  2. Security (password with strength indicator)
  3. Team details (role, game, region)
- Terms and conditions checkboxes
- Social registration options
- Real-time form validation and progress tracking

## Styling

All styles are contained in separate CSS files using CSS custom properties for theming. The design uses:
- Tactical brutalist aesthetic
- Acid lime (#CCFF00) and burnt orange (#FF4500) accents
- Warning yellow (#FFCC00) for registration pages
- Concrete-inspired color palette
- Custom fonts: Teko, IBM Plex Mono, Bebas Neue
- Scanline and noise effects for terminal aesthetic

## Routing

The application uses React Router v6 for navigation:
- `/` - Landing page (hero, features, problems, CTA)
- `/login` - Login/authentication page
- `/register` - Registration/sign-up page

Navigation between pages is handled through the Navigation component and form links.

## Future Enhancements

Potential improvements:
- Add dashboard/command center page after login
- Implement actual authentication with backend API
- Add password recovery flow
- Create user profile management
- Implement state management (Redux/Context API) for user session
- Add form validation library (Formik/React Hook Form)
- Create interactive roster management features
- Add animation libraries (Framer Motion) for page transitions
- Implement API integration for real data
- Add TypeScript for type safety
- Add protected routes for authenticated users
- Implement OAuth for social logins
- Add email verification flow
