import React, { useState } from 'react';
import { PracticeMode, QuestionOrder } from '../types';
import { useDarkMode } from '../contexts/DarkModeContext';

interface ModeSelectorProps {
  onSelectMode: (mode: PracticeMode) => void;
  onSelectOrder: (order: QuestionOrder) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ onSelectMode, onSelectOrder }) => {
  const [selectedMode, setSelectedMode] = useState<PracticeMode | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<QuestionOrder | null>(null);
  const { isDarkMode } = useDarkMode();

  const handleModeSelect = (mode: PracticeMode) => {
    setSelectedMode(mode);
    onSelectMode(mode);
  };

  const handleOrderSelect = (order: QuestionOrder) => {
    setSelectedOrder(order);
    onSelectOrder(order);
  };

  return (
    <div className="mb-8">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-100' : 'text-indigo-700'}`}>Select Practice Mode</h2>
      <div className="flex flex-col gap-4">
        <div>
          <button
            onClick={() => handleModeSelect('assignment')}
            className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out mr-4 ${selectedMode === 'assignment'
                ? (isDarkMode ? 'bg-indigo-900' : 'bg-indigo-800')
                : (isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700')
              }`}
          >
            Assignment Practice
          </button>
          <button
            onClick={() => handleModeSelect('full')}
            className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out ${selectedMode === 'full'
                ? (isDarkMode ? 'bg-indigo-900' : 'bg-indigo-800')
                : (isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700')
              }`}
          >
            Full Practice
          </button>
        </div>
        <div>
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-indigo-700'}`}>Question Order</h3>
          <button
            onClick={() => handleOrderSelect('random')}
            className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out mr-4 ${selectedOrder === 'random'
                ? (isDarkMode ? 'bg-purple-900' : 'bg-purple-800')
                : (isDarkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700')
              }`}
          >
            Random
          </button>
          <button
            onClick={() => handleOrderSelect('inOrder')}
            className={`px-6 py-3 text-white rounded-full font-semibold transition duration-300 ease-in-out ${selectedOrder === 'inOrder'
                ? (isDarkMode ? 'bg-purple-900' : 'bg-purple-800')
                : (isDarkMode ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700')
              }`}
          >
            In Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModeSelector;