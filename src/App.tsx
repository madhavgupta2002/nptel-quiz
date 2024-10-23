import React, { useState, useEffect } from 'react';
import { assignments } from './data/questions';
import { QuizState, PracticeMode, QuestionOrder, Question } from './types';
import AssignmentSelector from './components/AssignmentSelector';
import ModeSelector from './components/ModeSelector';
import QuizQuestion from './components/QuizQuestion';
import QuizStats from './components/QuizStats';
import AnswerStatus from './components/AnswerStatus';
import { ArrowRight, ArrowLeft, RefreshCw, Home } from 'lucide-react';

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    practiceMode: 'assignment',
    questionOrder: 'inOrder',
    currentAssignment: '',
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    selectedAnswer: null,
    showResult: false,
    questions: [],
    incorrectAnswers: [],
    answeredQuestions: [],
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const selectPracticeMode = (mode: PracticeMode) => {
    setQuizState(prev => ({ ...prev, practiceMode: mode }));
  };

  const selectQuestionOrder = (order: QuestionOrder) => {
    setQuizState(prev => ({ ...prev, questionOrder: order }));
  };

  const startQuiz = (assignment: string = '') => {
    let questions: Question[] = [];
    if (quizState.practiceMode === 'assignment') {
      questions = assignments[assignment];
    } else {
      questions = Object.values(assignments).flat();
    }

    if (quizState.questionOrder === 'random') {
      questions = shuffleArray([...questions]);
    }

    setQuizState(prev => ({
      ...prev,
      currentAssignment: assignment,
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: questions.length,
      selectedAnswer: null,
      showResult: false,
      questions: questions,
      incorrectAnswers: [],
      answeredQuestions: new Array(questions.length).fill(null),
    }));
    setQuizCompleted(false);
  };

  const handleAnswer = (answer: string) => {
    if (quizState.answeredQuestions[quizState.currentQuestionIndex] !== null) {
      return; // Question already answered
    }

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.answer;

    setQuizState(prev => {
      const newAnsweredQuestions = [...prev.answeredQuestions];
      newAnsweredQuestions[prev.currentQuestionIndex] = answer;

      return {
        ...prev,
        selectedAnswer: answer,
        showResult: true,
        score: isCorrect ? prev.score + 1 : prev.score,
        incorrectAnswers: isCorrect
          ? prev.incorrectAnswers
          : [...prev.incorrectAnswers, { ...currentQuestion, selectedAnswer: answer }],
        answeredQuestions: newAnsweredQuestions,
      };
    });
  };

  const moveQuestion = (direction: 'next' | 'prev') => {
    const newIndex = direction === 'next'
      ? Math.min(quizState.currentQuestionIndex + 1, quizState.totalQuestions - 1)
      : Math.max(quizState.currentQuestionIndex - 1, 0);

    if (newIndex === quizState.totalQuestions - 1 && direction === 'next') {
      setQuizCompleted(true);
    }

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: newIndex,
      selectedAnswer: prev.answeredQuestions[newIndex],
      showResult: prev.answeredQuestions[newIndex] !== null,
    }));
  };

  const jumpToQuestion = (index: number) => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: index,
      selectedAnswer: prev.answeredQuestions[index],
      showResult: prev.answeredQuestions[index] !== null,
    }));
  };

  const resetQuiz = () => {
    setQuizState({
      practiceMode: 'assignment',
      questionOrder: 'inOrder',
      currentAssignment: '',
      currentQuestionIndex: 0,
      score: 0,
      totalQuestions: 0,
      selectedAnswer: null,
      showResult: false,
      questions: [],
      incorrectAnswers: [],
      answeredQuestions: [],
    });
    setQuizCompleted(false);
  };

  const confirmGoToMainMenu = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed: boolean) => {
    setShowConfirmation(false);
    if (confirmed) {
      resetQuiz();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">WildLife Ecology</h1>

        {quizState.questions.length === 0 ? (
          <>
            <ModeSelector onSelectMode={selectPracticeMode} onSelectOrder={selectQuestionOrder} />
            {quizState.practiceMode === 'assignment' ? (
              <AssignmentSelector assignments={assignments} onSelect={startQuiz} />
            ) : (
              <button
                onClick={() => startQuiz()}
                className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Start Full Practice
              </button>
            )}
          </>
        ) : quizCompleted ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">Quiz Completed!</h2>
            <QuizStats 
              score={quizState.score} 
              totalQuestions={quizState.totalQuestions} 
              answeredQuestions={quizState.answeredQuestions}
            />
            {quizState.incorrectAnswers.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-700">Incorrect Answers:</h3>
                {quizState.incorrectAnswers.map((q, index) => (
                  <div key={index} className="mb-4 p-4 bg-red-100 rounded-lg">
                    <p className="font-semibold">{q.q}</p>
                    <p>Your answer: {q.options[q.selectedAnswer as keyof typeof q.options]}</p>
                    <p>Correct answer: {q.options[q.answer as keyof typeof q.options]}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={resetQuiz}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Back to Main Menu
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9">
              <QuizStats 
                score={quizState.score} 
                totalQuestions={quizState.totalQuestions}
                answeredQuestions={quizState.answeredQuestions}
              />

              <QuizQuestion
                question={quizState.questions[quizState.currentQuestionIndex]}
                onAnswer={handleAnswer}
                selectedAnswer={quizState.selectedAnswer}
                showResult={quizState.showResult}
              />

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => moveQuestion('prev')}
                  disabled={quizState.currentQuestionIndex === 0}
                  className={`px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center ${
                    quizState.currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ArrowLeft className="mr-2" size={20} /> Previous
                </button>

                <button
                  onClick={confirmGoToMainMenu}
                  className="px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
                >
                  <Home className="mr-2" size={20} /> Main Menu
                </button>

                {quizState.currentQuestionIndex === quizState.totalQuestions - 1 ? (
                  <button
                    onClick={() => moveQuestion('next')}
                    className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300 ease-in-out flex items-center"
                  >
                    Finish Quiz <RefreshCw className="ml-2" size={20} />
                  </button>
                ) : (
                  <button
                    onClick={() => moveQuestion('next')}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center"
                  >
                    Next <ArrowRight className="ml-2" size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <AnswerStatus
                totalQuestions={quizState.totalQuestions}
                currentQuestionIndex={quizState.currentQuestionIndex}
                answeredQuestions={quizState.answeredQuestions}
                correctAnswers={quizState.questions.map(q => q.answer)}
                onQuestionSelect={jumpToQuestion}
              />
            </div>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4">Are you sure you want to go back to the main menu? Your progress will be lost.</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleConfirmation(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmation(true)}
                className="px-4 py-2 bg-red-600 text-white rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;