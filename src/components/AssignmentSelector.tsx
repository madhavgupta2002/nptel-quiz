import React, { useState } from 'react';
import { Assignment, Question } from '../types';
import { useDarkMode } from '../contexts/DarkModeContext';

interface AssignmentSelectorProps {
  assignments: {
    [key: string]: Question[];
  };
  onSelect: (assignment: string) => void;
}

const AssignmentSelector: React.FC<AssignmentSelectorProps> = ({ assignments, onSelect }) => {
  const { isDarkMode } = useDarkMode();
  const [show2025Only, setShow2025Only] = useState(false);

  const toggle2025Mode = () => {
    setShow2025Only(!show2025Only);
  };

  // Filter assignments based on the toggle
  const getFilteredQuestions = (assignmentKey: string): Question[] => {
    // When toggle is off, show all questions
    if (!show2025Only) {
      return assignments[assignmentKey];
    }

    // Filter questions to only include those with year === 2025 (or undefined, which defaults to 2025)
    return assignments[assignmentKey].filter((question: Question) =>
      question.year === undefined || question.year === 2025 || question.year === 2025.2 || question.year === 2025.1
    );
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-indigo-700'}`}>Select an Assignment</h2>
        <button
          onClick={toggle2025Mode}
          className={`px-4 py-2 rounded-full font-medium text-sm transition duration-300 ease-in-out ${show2025Only
            ? `${isDarkMode ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white'}`
            : `${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`
            }`}
        >
          {show2025Only ? '2025 Only: ON' : 'Toggle 2025 Only'}
        </button>
      </div>
      <div className="flex flex-wrap gap-4">
        {Object.keys(assignments).map((assignment) => {
          // Skip assignments with no 2025 questions when toggle is on
          const filteredQuestions = getFilteredQuestions(assignment);
          if (show2025Only && filteredQuestions.length === 0) {
            return null;
          }

          return (
            <button
              key={assignment}
              onClick={() => {
                // If 2025 mode is on, we need to pass both the assignment name and the filtered mode
                if (show2025Only) {
                  // Inform QuizApp about the 2025 filter via localStorage
                  localStorage.setItem('show2025Only', 'true');
                } else {
                  localStorage.removeItem('show2025Only');
                }
                onSelect(assignment);
              }}
              className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
            >
              {assignment} {show2025Only && `(${filteredQuestions.length})`}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AssignmentSelector;