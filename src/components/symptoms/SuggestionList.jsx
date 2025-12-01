export default function SuggestionList({ suggestions, onSelect }) {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-medical-200 rounded-lg shadow-lg mt-1 z-10 max-h-64 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => onSelect(suggestion)}
          className="suggestion-item w-full text-left hover:bg-medical-50 focus:outline-none focus:bg-medical-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-medical-500"></div>
            <span className="text-gray-700 font-medium">{suggestion}</span>
          </div>
        </button>
      ))}
    </div>
  );
}
