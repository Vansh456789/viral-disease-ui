import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function ResultCard({ result }) {
  const confidenceColor =
    result.confidence >= 80
      ? 'text-red-600'
      : result.confidence >= 60
        ? 'text-yellow-600'
        : 'text-green-600';

  const confidenceBg =
    result.confidence >= 80
      ? 'bg-red-100'
      : result.confidence >= 60
        ? 'bg-yellow-100'
        : 'bg-green-100';

  return (
    <div className="card-medical border-l-4 border-medical-500 animate-slideIn">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-medical p-3 rounded-lg">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Predicted Disease</h2>
            <p className="text-gray-600 text-sm">Based on your symptoms analysis</p>
          </div>
        </div>
      </div>

      {/* Disease Name and Confidence */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-sm font-semibold text-gray-600 mb-1">Disease Classification</p>
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-bold text-gray-800">{result.disease}</h3>
            <CheckCircle2 className="w-8 h-8 text-wellness-500" />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-600 mb-1">Confidence Score</p>
          <div className={`${confidenceBg} ${confidenceColor} p-4 rounded-lg`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-lg">{result.confidence}%</span>
              <TrendingUp size={20} />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  result.confidence >= 80
                    ? 'bg-red-600'
                    : result.confidence >= 60
                      ? 'bg-yellow-600'
                      : 'bg-green-600'
                }`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 p-4 bg-medical-50 rounded-lg border border-medical-200">
        <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
        <p className="text-gray-700 leading-relaxed">{result.description}</p>
      </div>

      {/* Recommendations */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Recommendations</h4>
        <ul className="space-y-2">
          {result.recommendations.map((rec, index) => (
            <li key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <CheckCircle2 className="w-5 h-5 text-wellness-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{rec}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> This prediction is based on the symptoms provided and should not be used as a definitive diagnosis. Please consult with a healthcare professional for accurate diagnosis and treatment.
        </p>
      </div>
    </div>
  );
}
