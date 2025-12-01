import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (formData.email && formData.password) {
      onLogin();
      // Reset form
      setFormData({ email: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-4 top-3 text-medical-500" size={20} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="input-field pl-12"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-3 text-medical-500" size={20} />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="input-field pl-12"
            required
          />
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="text-right">
        <a href="#" className="text-sm text-medical-600 hover:text-medical-700 font-medium">
          Forgot password?
        </a>
      </div>

      {/* Login Button */}
      <button type="submit" className="btn-primary w-full mt-6">
        Login
      </button>

      {/* Demo Notice */}
      <p className="text-xs text-gray-500 text-center mt-4">
        Demo mode: Use any email and password to continue
      </p>
    </form>
  );
}
