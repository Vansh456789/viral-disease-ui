import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DISEASES } from '../../data/diseaseSymptoms';

export default function DiseaseSelector({ selectedSymptoms, onAddSymptom, onRemoveSymptom }) {
  const [expandedDiseases, setExpandedDiseases] = useState(new Set());

  const toggleDiseaseExpand = (diseaseId) => {
    const newExpanded = new Set(expandedDiseases);
    if (newExpanded.has(diseaseId)) {
      newExpanded.delete(diseaseId);
    } else {
      newExpanded.add(diseaseId);
    }
    setExpandedDiseases(newExpanded);
  };

  const toggleSymptomSelection = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      onRemoveSymptom(symptom);
    } else {
      onAddSymptom(symptom);
    }
  };

  return (
    <div className="card-medical space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Select Disease & Symptoms
        </h2>
        <p className="text-gray-600">
          Click on a disease to view its symptoms, then select the symptoms you have
        </p>
      </div>

      <div className="space-y-3">
        {DISEASES.map((disease) => (
          <div key={disease.id} className="border border-medical-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            {/* Disease Header */}
            <button
              onClick={() => toggleDiseaseExpand(disease.id)}
              className="w-full px-4 py-3 bg-gradient-to-r from-medical-50 to-wellness-50 hover:from-medical-100 hover:to-wellness-100 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-3 text-left">
                <span className="text-2xl">{disease.emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{disease.name}</h3>
                  <p className="text-sm text-gray-600">{disease.symptoms.length} symptoms</p>
                </div>
              </div>
              {expandedDiseases.has(disease.id) ? (
                <ChevronUp className="text-medical-600" size={20} />
              ) : (
                <ChevronDown className="text-medical-600" size={20} />
              )}
            </button>

            {/* Symptoms List */}
            {expandedDiseases.has(disease.id) && (
              <div className="px-4 py-4 bg-white border-t border-medical-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {disease.symptoms.map((symptom, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedSymptoms.includes(symptom)}
                        onChange={() => toggleSymptomSelection(symptom)}
                        className="w-4 h-4 accent-medical-600 cursor-pointer rounded"
                      />
                      <span className="text-gray-700 flex-1">{symptom}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected Symptoms Summary */}
      {selectedSymptoms.length > 0 && (
        <div className="mt-6 pt-6 border-t border-medical-200">
          <h3 className="font-semibold text-gray-800 mb-3">
            Selected Symptoms ({selectedSymptoms.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-center gap-2 px-3 py-1 bg-medical-100 text-medical-700 rounded-full text-sm"
              >
                <span>{symptom}</span>
                <button
                  onClick={() => onRemoveSymptom(symptom)}
                  className="hover:text-medical-900 font-semibold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
