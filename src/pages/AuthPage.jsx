import { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import MedicalHeader from '../components/auth/MedicalHeader';

export default function AuthPage({ onLogin }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-gradient-medical flex flex-col items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-medical-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wellness-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 w-full max-w-md">
        {/* Medical Icon Header */}
        <MedicalHeader />

        {/* Auth Card */}
        <div className="card-medical mt-8 bg-white">
          {/* Tab Navigation */}
          <div className="flex mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 font-semibold text-center transition-all duration-300 ${
                activeTab === 'login'
                  ? 'border-b-2 border-medical-500 text-medical-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-4 font-semibold text-center transition-all duration-300 ${
                activeTab === 'signup'
                  ? 'border-b-2 border-medical-500 text-medical-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <div>
            {activeTab === 'login' ? (
              <LoginForm onLogin={onLogin} />
            ) : (
              <SignupForm onSignup={onLogin} />
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-white text-sm mt-6 opacity-80">
          © 2025 Viral Disease Classification System. All rights reserved.
        </p>
      </div>
    </div>
  );
}
