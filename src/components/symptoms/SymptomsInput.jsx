import { useState } from 'react';
import { Search, X } from 'lucide-react';
import SuggestionList from './SuggestionList';
import SymptomChips from './SymptomChips';

const DUMMY_SYMPTOMS = [
  'Fever',
  'Cough',
  'Fatigue',
  'Difficulty breathing',
  'Headache',
  'Body aches',
  'Sore throat',
  'Congestion',
  'Runny nose',
  'Sneezing',
  'Loss of taste',
  'Loss of smell',
  'Nausea',
  'Vomiting',
  'Diarrhea',
  'Chills',
  'Joint pain',
  'Muscle pain',
];

export default function SymptomsInput({ selectedSymptoms, onAddSymptom, onRemoveSymptom }) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Filter suggestions based on input
    const filtered = DUMMY_SYMPTOMS.filter(
      (symptom) =>
        symptom.toLowerCase().includes(value) &&
        !selectedSymptoms.includes(symptom)
    );

    setSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (symptom) => {
    onAddSymptom(symptom);
    setInputValue('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleClearInput = () => {
    setInputValue('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      // Add custom symptom
      onAddSymptom(inputValue.trim());
      setInputValue('');
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="card-medical space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Search and Select Symptoms
        </label>
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-medical-500" size={20} />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => inputValue && setShowSuggestions(true)}
              onKeyPress={handleKeyPress}
              placeholder="Type a symptom (e.g., fever, cough)..."
              className="input-field pl-12 pr-10"
            />
            {inputValue && (
              <button
                onClick={handleClearInput}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <SuggestionList
              suggestions={suggestions}
              onSelect={handleSuggestionClick}
            />
          )}

          {/* No suggestions message */}
          {showSuggestions && inputValue && suggestions.length === 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-medical-200 rounded-lg mt-1 p-4 text-center text-gray-500">
              <p className="text-sm">No matching symptoms found. Press Enter to add "{inputValue}"</p>
            </div>
          )}
        </div>
      </div>

      {/* Selected Symptoms */}
      {selectedSymptoms.length > 0 && (
        <SymptomChips
          symptoms={selectedSymptoms}
          onRemove={onRemoveSymptom}
        />
      )}

      {/* Empty State */}
      {selectedSymptoms.length === 0 && (
        <div className="py-8 text-center">
          <p className="text-gray-500 text-sm">
            No symptoms selected yet. Start typing above to add symptoms.
          </p>
        </div>
      )}
    </div>
  );
}
