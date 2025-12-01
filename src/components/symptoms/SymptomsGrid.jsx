import { X } from 'lucide-react';
import { ALL_SYMPTOMS } from '../../data/symptoms';

export default function SymptomsGrid({ selectedSymptoms, onAddSymptom, onRemoveSymptom }) {
  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      onRemoveSymptom(symptom);
    } else {
      onAddSymptom(symptom);
    }
  };

  return (
    <div className="card-medical space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Select Your Symptoms
        </h2>
        <p className="text-gray-600">
          Click on symptoms you are experiencing. Multiple selections are allowed.
        </p>
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {ALL_SYMPTOMS.map((symptom, index) => (
          <button
            key={index}
            onClick={() => toggleSymptom(symptom)}
            className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 border-2 ${
              selectedSymptoms.includes(symptom)
                ? 'bg-medical-500 text-white border-medical-600 shadow-md scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-medical-400 hover:bg-gray-50'
            }`}
          >
            {symptom}
          </button>
        ))}
      </div>

      {/* Selected Count */}
      {selectedSymptoms.length > 0 && (
        <div className="pt-4 border-t border-medical-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800">
              Selected Symptoms ({selectedSymptoms.length})
            </h3>
            <button
              onClick={() => selectedSymptoms.forEach(onRemoveSymptom)}
              className="text-sm text-medical-600 hover:text-medical-700 font-medium"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-2 px-3 py-2 bg-medical-100 text-medical-700 rounded-full text-sm font-medium"
              >
                <span>{symptom}</span>
                <button
                  onClick={() => onRemoveSymptom(symptom)}
                  className="hover:text-medical-900 ml-1"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
