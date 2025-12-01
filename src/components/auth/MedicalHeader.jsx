import { Heart } from 'lucide-react';

export default function MedicalHeader() {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-white p-4 rounded-full shadow-lg">
          <Heart className="w-8 h-8 text-medical-500" fill="currentColor" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">
        Viral Disease<br />Classification System
      </h1>
      <p className="text-medical-100 text-sm">
        Advanced disease detection and classification
      </p>
    </div>
  );
}
