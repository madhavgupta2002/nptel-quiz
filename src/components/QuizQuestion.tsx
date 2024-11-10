import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: string) => void;
  selectedAnswer: string | null;
  showResult: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  showResult,
}) => {
  const { isDarkMode } = useDarkMode();

  const getButtonClass = (option: string) => {
    let baseClass = "w-full p-4 rounded-lg font-semibold text-left transition duration-300 ease-in-out transform hover:scale-105 ";
    if (!showResult) {
      return baseClass + (isDarkMode
        ? "bg-gray-800 text-gray-100 hover:bg-gray-700 border border-gray-700"
        : "bg-white text-indigo-700 hover:bg-indigo-100");
    }
    if (option === question.answer) {
      return baseClass + (isDarkMode
        ? "bg-green-700 text-gray-100"
        : "bg-green-500 text-white");
    }
    if (option === selectedAnswer && option !== question.answer) {
      return baseClass + (isDarkMode
        ? "bg-red-700 text-gray-100"
        : "bg-red-500 text-white");
    }
    return baseClass + (isDarkMode
      ? "bg-gray-700 text-gray-400"
      : "bg-gray-200 text-gray-700");
  };

  const formatText = (text: string) => {
    return text.replace(/\\n/g, '\n');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className={`text-2xl font-bold mb-6 whitespace-pre-line ${isDarkMode ? 'text-gray-100' : 'text-indigo-900'
        }`}>
        {formatText(question.q)}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => !showResult && onAnswer(key)}
            className={getButtonClass(key)}
            disabled={showResult}
          >
            <span className="flex items-center">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${isDarkMode
                  ? 'bg-gray-600 text-gray-100'
                  : 'bg-indigo-200 text-indigo-700'
                }`}>
                {key.toUpperCase()}
              </span>
              <span className="whitespace-pre-line">{formatText(value)}</span>
            </span>
            {showResult && key === question.answer && (
              <CheckCircle className={`inline-block ml-2 ${isDarkMode ? 'text-green-400' : 'text-green-700'
                }`} size={24} />
            )}
            {showResult && key === selectedAnswer && key !== question.answer && (
              <XCircle className={`inline-block ml-2 ${isDarkMode ? 'text-red-400' : 'text-red-700'
                }`} size={24} />
            )}
          </button>
        ))}
      </div>
      {showResult && (
        <div className={`mt-6 p-4 rounded-lg ${isDarkMode
            ? 'bg-gray-800 border border-gray-700 text-gray-300'
            : 'bg-blue-100 text-blue-700'
          }`}>
          <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-blue-800'
            }`}>Explanation:</h3>
          <p className={isDarkMode ? 'text-gray-300' : 'text-blue-700'}>
            {formatText(question.explanation)}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;