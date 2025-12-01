import { useState } from 'react';
import Navbar from '../components/common/Navbar';
import SymptomsGrid from '../components/symptoms/SymptomsGrid';
import ResultCard from '../components/symptoms/ResultCard';

export default function SymptomsPage({ onLogout }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddSymptom = (symptom) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
  };

  const handlePredict = async () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        disease: 'COVID-19',
        confidence: 85,
        description: 'Based on the selected symptoms, there is a high probability of COVID-19 infection.',
        recommendations: [
          'Consult a healthcare professional immediately',
          'Perform an RT-PCR test for confirmation',
          'Isolate and follow local health guidelines',
          'Monitor vital signs closely',
        ],
      });
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setSelectedSymptoms([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 to-wellness-50">
      <Navbar onLogout={onLogout} />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Select Your Symptoms
            </h1>
            <p className="text-gray-600 text-lg">
              Click on the symptoms you are experiencing to predict your disease
            </p>
          </div>

          {/* Symptoms Grid */}
          <SymptomsGrid
            selectedSymptoms={selectedSymptoms}
            onAddSymptom={handleAddSymptom}
            onRemoveSymptom={handleRemoveSymptom}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handlePredict}
              disabled={selectedSymptoms.length === 0 || loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="inline-block animate-spin">⚙️</span>
                  Predicting...
                </>
              ) : (
                'Predict Disease'
              )}
            </button>
            <button
              onClick={handleClear}
              className="btn-secondary"
            >
              Clear All
            </button>
          </div>

          {/* Result */}
          {result && <ResultCard result={result} />}
        </div>
      </main>
    </div>
  );
}
