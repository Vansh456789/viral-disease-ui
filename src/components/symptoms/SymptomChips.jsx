import { X } from 'lucide-react';

export default function SymptomChips({ symptoms, onRemove }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Selected Symptoms ({symptoms.length})
      </label>
      <div className="flex flex-wrap gap-3">
        {symptoms.map((symptom, index) => (
          <div
            key={index}
            className="chip"
          >
            <span>{symptom}</span>
            <button
              onClick={() => onRemove(symptom)}
              className="hover:text-medical-900 transition-colors"
              aria-label={`Remove ${symptom}`}
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
