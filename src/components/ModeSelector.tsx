import React from 'react';
import { PracticeMode, QuestionOrder } from '../types';

interface ModeSelectorProps {
  onSelectMode: (mode: PracticeMode) => void;
  onSelectOrder: (order: QuestionOrder) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelectMode, onSelectOrder }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Select Practice Mode</h2>
      <div className="flex flex-col gap-4">
        <div>
          <button
            onClick={() => onSelectMode('assignment')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out mr-4"
          >
            Assignment Practice
          </button>
          <button
            onClick={() => onSelectMode('full')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Full Practice
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-indigo-700">Question Order</h3>
          <button
            onClick={() => onSelectOrder('random')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300 ease-in-out mr-4"
          >
            Random
          </button>
          <button
            onClick={() => onSelectOrder('inOrder')}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            In Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;