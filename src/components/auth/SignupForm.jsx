import { useState } from 'react';
import { User, Mail, Phone, Lock, Users } from 'lucide-react';

export default function SignupForm({ onSignup }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'student',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Check password match
    if (name === 'password' || name === 'confirmPassword') {
      const newPass = name === 'password' ? value : formData.password;
      const newConfirm = name === 'confirmPassword' ? value : formData.confirmPassword;
      setPasswordMatch(newPass === newConfirm);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      passwordMatch
    ) {
      onSignup();
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'student',
        password: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <div className="relative">
          <User className="absolute left-4 top-3 text-medical-500" size={20} />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="input-field pl-12"
            required
          />
        </div>
      </div>

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

      {/* Phone Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-4 top-3 text-medical-500" size={20} />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="input-field pl-12"
            required
          />
        </div>
      </div>

      {/* Role Dropdown */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
        <div className="relative">
          <Users className="absolute left-4 top-3 text-medical-500" size={20} />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="input-field pl-12 appearance-none cursor-pointer"
          >
            <option value="student">Student</option>
            <option value="doctor">Doctor</option>
            <option value="researcher">Researcher</option>
          </select>
          <div className="absolute right-4 top-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
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

      {/* Confirm Password Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-3 text-medical-500" size={20} />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className={`input-field pl-12 ${!passwordMatch && formData.confirmPassword ? 'border-red-500 focus:ring-red-500' : ''}`}
            required
          />
        </div>
        {!passwordMatch && formData.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
        )}
      </div>

      {/* Sign Up Button */}
      <button
        type="submit"
        disabled={!passwordMatch}
        className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Create Account
      </button>
    </form>
  );
}
