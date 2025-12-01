# Viral Disease Classification System - Frontend UI

A modern, professional React + Tailwind CSS frontend for the Viral Disease Classification System. This application provides a clean, medical-themed interface for disease classification based on symptoms.

## Features

### 🔐 Authentication (Login/Signup Page)
- **Clean Medical-Themed Design**: Soft blue/green gradients, rounded cards, subtle animations
- **Two Tabs**: Login and Signup modes
- **Signup Form**: Name, Email, Phone, Role (Doctor/Student/Researcher), Password
- **Login Form**: Email and Password
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Input Validation**: Real-time feedback and password matching

### 📋 Symptoms Classification (Symptoms Input Page)
- **Top Navigation Bar**: Medical branding and logout button
- **Smart Autocomplete**: Dynamic symptom suggestions as you type
- **Symptom Chips**: Visual selection of multiple symptoms with easy removal
- **Prediction Engine**: Large CTA button to trigger classification
- **Medical-Style Results**: Beautiful result card with:
  - Predicted disease name
  - Confidence score with visual progress bar
  - Detailed description
  - Medical recommendations
  - Important medical disclaimer

## Project Structure

```
viral-disease-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx          # Login form component
│   │   │   ├── SignupForm.jsx         # Signup form component
│   │   │   └── MedicalHeader.jsx      # Auth page header
│   │   ├── common/
│   │   │   └── Navbar.jsx             # Navigation bar component
│   │   └── symptoms/
│   │       ├── SymptomsInput.jsx      # Symptoms input with autocomplete
│   │       ├── SuggestionList.jsx     # Dropdown suggestions
│   │       ├── SymptomChips.jsx       # Selected symptoms display
│   │       └── ResultCard.jsx         # Disease prediction result display
│   ├── pages/
│   │   ├── AuthPage.jsx               # Login/Signup page
│   │   └── SymptomsPage.jsx           # Symptoms input page
│   ├── App.jsx                        # Main app with routing
│   ├── index.css                      # Global styles + Tailwind directives
│   └── main.jsx                       # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Navigate to the project directory**:
   ```bash
   cd viral-disease-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - The app will automatically open at `http://localhost:3000`
   - Demo credentials: Use any email/password combination to test

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **React 18**: Modern UI library for building components
- **React Router**: Client-side routing for navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful SVG icons
- **Vite**: Fast build tool and dev server
- **PostCSS & Autoprefixer**: CSS processing

## Design System

### Color Palette
- **Medical Blue**: Primary color (#0ea5e9 - #0369a1)
- **Wellness Green**: Secondary color (#22c55e - #15803d)
- **Soft Gradients**: Medical theme throughout
- **Clean Whites**: Card backgrounds
- **Gray Scale**: Typography and UI elements

### Components
- **Buttons**: Primary (gradient), Secondary (light), Disabled states
- **Input Fields**: Focus states, icons, validation feedback
- **Cards**: Rounded, shadowed, hover effects
- **Chips**: Removable symptom pills with smooth interactions
- **Navbar**: Minimal, medical-branded

## Features Walkthrough

### 1. Authentication Flow
1. User lands on auth page with medical branding
2. Can toggle between Login and Signup tabs
3. Signup: Collects name, email, phone, role, and password
4. Login: Simple email/password form
5. Form validation with real-time feedback
6. On success, redirects to symptoms page

### 2. Symptoms Classification Flow
1. User sees navbar with app branding and logout
2. Types symptoms in search box
3. Gets autocomplete suggestions from pre-defined symptom list
4. Can add custom symptoms by pressing Enter
5. Selected symptoms appear as removable chips
6. Clicks "Predict Disease" button
7. System shows result card with:
   - Disease name
   - Confidence percentage with visual indicator
   - Medical description
   - Actionable recommendations
   - Legal medical disclaimer

## Integration Points

The frontend is ready for backend integration:

1. **Authentication**: Replace demo validation with API calls to your backend
   - POST `/api/auth/login`
   - POST `/api/auth/signup`

2. **Symptoms Prediction**: Replace mock prediction with ML model
   - POST `/api/predict` with selected symptoms
   - Returns: disease name, confidence, description

3. **Symptom Autocomplete**: Can fetch from backend
   - GET `/api/symptoms` to load suggestion list

## UI Responsiveness

- **Mobile**: Single column, optimized spacing
- **Tablet**: Adaptive grid layouts
- **Desktop**: Full-width layouts with max-width constraints
- All components have proper touch targets and accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add symptom severity levels
- [ ] Implement real backend integration
- [ ] Add ML model predictions
- [ ] User history/dashboard
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Download results as PDF
- [ ] Share results functionality

## License

All rights reserved © 2025 Viral Disease Classification System

## Support

For issues or feature requests, please reach out to the development team.
