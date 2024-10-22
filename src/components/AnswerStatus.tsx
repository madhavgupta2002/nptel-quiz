import React from 'react';

interface AnswerStatusProps {
    totalQuestions: number;
    currentQuestionIndex: number;
    answeredQuestions: (string | null)[];
    correctAnswers: string[];
    onQuestionSelect: (index: number) => void;
}

const AnswerStatus: React.FC<AnswerStatusProps> = ({
    totalQuestions,
    currentQuestionIndex,
    answeredQuestions,
    correctAnswers,
    onQuestionSelect,
}) => {
    const getStatusColor = (index: number) => {
        if (answeredQuestions[index] === null) {
            return 'bg-gray-200';
        }
        if (answeredQuestions[index] === correctAnswers[index]) {
            return 'bg-green-500 text-white';
        }
        return 'bg-red-500 text-white';
    };

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-indigo-700">Answer Status</h3>
            <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: totalQuestions }, (_, index) => (
                    <button
                        key={index}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${getStatusColor(
                            index
                        )} ${index === currentQuestionIndex ? 'ring-2 ring-indigo-600' : ''}`}
                        onClick={() => onQuestionSelect(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AnswerStatus;