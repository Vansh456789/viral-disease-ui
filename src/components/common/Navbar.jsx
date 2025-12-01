import { LogOut, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/auth');
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center max-w-4xl">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-medical p-2 rounded-lg">
            <Heart className="w-6 h-6 text-white" fill="white" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-gray-800">VDC System</h1>
            <p className="text-xs text-gray-500">Viral Disease Classification</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
}
