import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle } from 'lucide-react';

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
  const getButtonClass = (option: string) => {
    let baseClass = "w-full p-4 rounded-lg font-semibold text-left transition duration-300 ease-in-out transform hover:scale-105 ";
    if (!showResult) {
      return baseClass + "bg-white text-indigo-700 hover:bg-indigo-100";
    }
    if (option === question.answer) {
      return baseClass + "bg-green-500 text-white";
    }
    if (option === selectedAnswer && option !== question.answer) {
      return baseClass + "bg-red-500 text-white";
    }
    return baseClass + "bg-gray-200 text-gray-700";
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-indigo-900">{question.q}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(question.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => !showResult && onAnswer(key)}
            className={getButtonClass(key)}
            disabled={showResult}
          >
            <span className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center mr-3">
                {key.toUpperCase()}
              </span>
              {value}
            </span>
            {showResult && key === question.answer && (
              <CheckCircle className="inline-block ml-2 text-green-700" size={24} />
            )}
            {showResult && key === selectedAnswer && key !== question.answer && (
              <XCircle className="inline-block ml-2 text-red-700" size={24} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;