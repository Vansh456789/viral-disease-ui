import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import SymptomsPage from './pages/SymptomsPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              <Navigate to="/symptoms" replace />
            ) : (
              <AuthPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/symptoms"
          element={
            isAuthenticated ? (
              <SymptomsPage onLogout={handleLogout} />
            ) : (
              <Navigate to="/auth" replace />
            )
          }
        />
        <Route path="/" element={<Navigate to={isAuthenticated ? "/symptoms" : "/auth"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
