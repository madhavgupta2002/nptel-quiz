import React from 'react';
import { Target, Award, XCircle } from 'lucide-react';

interface QuizStatsProps {
  score: number;
  totalQuestions: number;
}

const QuizStats: React.FC<QuizStatsProps> = ({ score, totalQuestions }) => {
  const accuracy = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-xl font-bold mb-4 text-indigo-700">Quiz Statistics</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <Target className="text-indigo-600 mr-2" size={24} />
          <div>
            <p className="text-sm text-gray-600">Accuracy</p>
            <p className="text-lg font-semibold">{accuracy.toFixed(1)}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Award className="text-green-600 mr-2" size={24} />
          <div>
            <p className="text-sm text-gray-600">Correct Answers</p>
            <p className="text-lg font-semibold">{score}</p>
          </div>
        </div>
        <div className="flex items-center">
          <XCircle className="text-red-600 mr-2" size={24} />
          <div>
            <p className="text-sm text-gray-600">Incorrect Answers</p>
            <p className="text-lg font-semibold">{totalQuestions - score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStats;