import React from 'react';
import { Question } from '../types';

interface IncorrectAnswersProps {
    incorrectAnswers: Question[];
}

const IncorrectAnswers: React.FC<IncorrectAnswersProps> = ({ incorrectAnswers }) => {
    if (incorrectAnswers.length === 0) {
        return null;
    }

    return (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">Incorrect Answers:</h3>
            {incorrectAnswers.map((q, index) => (
                <div key={index} className="mb-4 p-4 bg-red-100 rounded-lg">
                    <p className="font-semibold">{q.q}</p>
                    <p>Your answer: {q.options[q.selectedAnswer as keyof typeof q.options]}</p>
                    <p>Correct answer: {q.options[q.answer as keyof typeof q.options]}</p>
                </div>
            ))}
        </div>
    );
};

export default IncorrectAnswers;