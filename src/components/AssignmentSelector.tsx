import React from 'react';
import { Assignment } from '../types';
import { useDarkMode } from '../contexts/DarkModeContext';

interface AssignmentSelectorProps {
  assignments: Assignment;
  onSelect: (assignment: string) => void;
}

const AssignmentSelector: React.FC<AssignmentSelectorProps> = ({ assignments, onSelect }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="mb-8">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-indigo-700'}`}>Select an Assignment</h2>
      <div className="flex flex-wrap gap-4">
        {Object.keys(assignments).map((assignment) => (
          <button
            key={assignment}
            onClick={() => onSelect(assignment)}
            className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 ${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
          >
            {assignment}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentSelector;