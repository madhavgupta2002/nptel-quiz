import React from 'react';
import { Assignment } from '../types';

interface AssignmentSelectorProps {
  assignments: Assignment;
  onSelect: (assignment: string) => void;
}

const AssignmentSelector: React.FC<AssignmentSelectorProps> = ({ assignments, onSelect }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Select an Assignment</h2>
      <div className="flex flex-wrap gap-4">
        {Object.keys(assignments).map((assignment) => (
          <button
            key={assignment}
            onClick={() => onSelect(assignment)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            {assignment}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignmentSelector;