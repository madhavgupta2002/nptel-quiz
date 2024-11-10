import React from 'react';
import { Target, Award, XCircle, CheckCircle, HelpCircle, Percent } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

interface QuizStatsProps {
  score: number;
  totalQuestions: number;
  answeredQuestions: (string | null)[];
}

const QuizStats: React.FC<QuizStatsProps> = ({ score, totalQuestions, answeredQuestions }) => {
  const attempted = answeredQuestions.filter(answer => answer !== null).length;
  const unattempted = totalQuestions - attempted;
  const accuracy = attempted > 0 ? (score / attempted) * 100 : 0;
  const completionPercentage = (attempted / totalQuestions) * 100;

  const { isDarkMode } = useDarkMode();

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
      <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-indigo-700'}`}>Quiz Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center">
          <Target className="text-indigo-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Accuracy</p>
            <p className="text-lg font-semibold">{accuracy.toFixed(1)}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <Award className="text-green-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Correct Answers</p>
            <p className="text-lg font-semibold">{score}</p>
          </div>
        </div>
        <div className="flex items-center">
          <XCircle className="text-red-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Incorrect Answers</p>
            <p className="text-lg font-semibold">{attempted - score}</p>
          </div>
        </div>
        <div className="flex items-center">
          <CheckCircle className="text-blue-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Questions Attempted</p>
            <p className="text-lg font-semibold">{attempted}</p>
          </div>
        </div>
        <div className="flex items-center">
          <HelpCircle className="text-yellow-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Questions Remaining</p>
            <p className="text-lg font-semibold">{unattempted}</p>
          </div>
        </div>
        <div className="flex items-center">
          <Percent className="text-purple-600 mr-3" size={24} />
          <div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Completion</p>
            <p className="text-lg font-semibold">{completionPercentage.toFixed(1)}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStats;