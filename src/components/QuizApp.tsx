import React, { useState } from 'react';
import { assignment } from '../data/assignments';
import { QuizState, PracticeMode, QuestionOrder, Question } from '../types';
import AssignmentSelector from './AssignmentSelector';
import ModeSelector from './ModeSelector';
import QuizQuestion from './QuizQuestion';
import QuizStats from './QuizStats';
import AnswerStatus from './AnswerStatus';
import { ArrowRight, ArrowLeft, RefreshCw, Home, ChevronDown, ChevronUp, BookOpen, ArrowLeftCircle } from 'lucide-react';
import ReactGA from 'react-ga4';
import ShortNotes from './ShortNotes';

interface QuizAppProps {
  subject: string;
  onBack: () => void;
}

const QuizApp: React.FC<QuizAppProps> = ({ subject, onBack }) => {
  const assignments = assignment[subject];
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
  const [showStudyPlan, setShowStudyPlan] = useState(true);
  const [isStudyPlanExpanded, setIsStudyPlanExpanded] = useState(false);
  const [showShortNotes, setShowShortNotes] = useState(false);

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
    setShowStudyPlan(false);

    ReactGA.event({
      category: 'Quiz',
      action: 'Start Quiz',
      label: assignment || 'Full Practice'
    });
  };

  const handleAnswer = (answer: string) => {
    if (quizState.answeredQuestions[quizState.currentQuestionIndex] !== null) {
      return;
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

    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: newIndex,
      selectedAnswer: prev.answeredQuestions[newIndex],
      showResult: prev.answeredQuestions[newIndex] !== null,
    }));
  };

  const finishQuiz = () => {
    setQuizCompleted(true);
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
    setShowStudyPlan(true);
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
    <div className="py-6 sm:py-12 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="mr-4 p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeftCircle className="w-6 h-6 text-indigo-900" />
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900">{subject}</h1>
        </div>

        {showStudyPlan && subject === 'wildlifeEcology' && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center cursor-pointer" onClick={() => setIsStudyPlanExpanded(!isStudyPlanExpanded)}>
                <h2 className="text-xl sm:text-2xl font-bold text-indigo-700">Study Plan for <em>Wildlife Ecology</em></h2>
                {isStudyPlanExpanded ? (
                  <ChevronUp className="w-6 h-6 text-indigo-700 ml-2" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-indigo-700 ml-2" />
                )}
              </div>
              <button
                onClick={() => setShowShortNotes(!showShortNotes)}
                className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out flex items-center"
              >
                <BookOpen className="mr-2" size={20} /> View Short Notes
              </button>
            </div>

            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isStudyPlanExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              {showShortNotes ? (
                <ShortNotes />
              ) : (
                <>
                  {/* Full Preparation */}
                  <div className="mb-4 overflow-x-auto">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">1. <strong>Full Preparation</strong></h3>
                    <div className="min-w-full overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Material</th>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Link</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Main Lectures</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://www.youtube.com/playlist?list=PLFW6lRTa1g81YMhPVMSPwEpZbVz64acBS" className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Playlist</a></td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Notes</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/1pg0wYLSwVvlO3JBkzSpcWnKDRKorflgC/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Notes</a></td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Revision</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/1PgKfi3gUNhLMjn5RZRqxtNuYJZrbvhvT/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Notes</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 4-5 Days Preparation */}
                  <div className="mb-4 overflow-x-auto">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">2. <strong>4-5 Days Preparation</strong></h3>
                    <p className="mb-2">Watch TA Lectures (ranked in order of preference):</p>
                    <div className="min-w-full overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">TA</th>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Playlist</th>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Notes</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Geetika 2023 (Best)</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://www.youtube.com/playlist?list=PL8uRJ-DU5HqNB-tloVDAVr-xoSKVXBXgG" className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Playlist</a></td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/14UQa4YLVG2Q9da4IMUijvQ_zhZ7Qu6Tb/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Notes</a></td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Chiti Arvind 2023</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://www.youtube.com/playlist?list=PLlinxzRfuQpIildQmYrpMQ2fnQmhB6A7r" className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Playlist</a></td>
                            <td className="px-2 sm:px-4 py-2">-</td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Abdus Shakur 2023</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://www.youtube.com/playlist?list=PL0vcsWrsLHmR_YwSlqsjTllsSbda03ewz" className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Playlist</a></td>
                            <td className="px-2 sm:px-4 py-2">-</td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2 whitespace-nowrap">Arpit Omprakash 2024</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://www.youtube.com/playlist?list=PLsz06jx70WInasR_LjCSemY2gXsHO7pez" className="inline-block bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Playlist</a></td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/1o01RTSsk7ixZdXsNoRUZw6-zh442peQM/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Notes</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* 1-2 Days Preparation */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">3. <strong>1-2 Days Preparation</strong></h3>
                    <p className="mb-2"><strong>Notes Only</strong>: Stick to lecture notes or revision lectures of above TA (week 12).</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span><strong>Geetika 2023 Notes</strong>:</span>
                        <a href="https://drive.google.com/file/d/14UQa4YLVG2Q9da4IMUijvQ_zhZ7Qu6Tb/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Download here</a>
                      </li>
                      <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span><strong>Arpit Omprakash 2024 Notes</strong>:</span>
                        <a href="https://drive.google.com/file/d/1o01RTSsk7ixZdXsNoRUZw6-zh442peQM/view?usp=drive_link" className="inline-block bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Download here</a>
                      </li>
                    </ul>
                  </div>

                  {/* Assignment & Practice */}
                  <div className="mb-4 overflow-x-auto">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">4. <strong>Assignment & Practice</strong></h3>
                    <div className="min-w-full overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Description</th>
                            <th className="px-2 sm:px-4 py-2 bg-gray-50">Link</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-2 sm:px-4 py-2"><strong>Official MCQ Answers</strong> (Not helpful for studying)</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/1WvIwQbLc1PRFhFg7f0Pa_i4ZKFfaPMLr/view?usp=drive_link" className="inline-block bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Download here</a></td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2"><strong>Concise Revision Assignment Questions</strong> (Revise before exam)</td>
                            <td className="px-2 sm:px-4 py-2"><a href="https://drive.google.com/file/d/1lvbxkAQjmnrnqZZUgeo2YVnXhJjjDD0K/view?usp=drive_link" className="inline-block bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Download here</a></td>
                          </tr>
                          <tr>
                            <td className="px-2 sm:px-4 py-2"><strong>Assignment Practice Quiz</strong> (Aim for 90%+ accuracy by attempting it 3-4 times,below)</td>
                            <td className="px-2 sm:px-4 py-2"><a href="http://mooc-quiz.vercel.app/" className="inline-block bg-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-sm">Attempt here</a></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

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
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-700">Quiz Completed!</h2>
            <QuizStats
              score={quizState.score}
              totalQuestions={quizState.totalQuestions}
              answeredQuestions={quizState.answeredQuestions}
            />
            {quizState.incorrectAnswers.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-indigo-700">Incorrect Answers:</h3>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-9">
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

              <div className="mt-8 flex flex-wrap justify-between items-center gap-4">
                {quizState.currentQuestionIndex > 0 && (
                  <button
                    onClick={() => moveQuestion('prev')}
                    className="px-4 sm:px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center"
                  >
                    <ArrowLeft className="mr-2" size={20} /> Previous
                  </button>
                )}

                <button
                  onClick={confirmGoToMainMenu}
                  className="px-4 sm:px-6 py-3 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
                >
                  <Home className="mr-2" size={20} /> Main Menu
                </button>

                {quizState.currentQuestionIndex < quizState.totalQuestions - 1 && (
                  <button
                    onClick={() => moveQuestion('next')}
                    className="px-4 sm:px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center"
                  >
                    Next <ArrowRight className="ml-2" size={20} />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-3">
              <AnswerStatus
                totalQuestions={quizState.totalQuestions}
                currentQuestionIndex={quizState.currentQuestionIndex}
                answeredQuestions={quizState.answeredQuestions}
                correctAnswers={quizState.questions.map(q => q.answer)}
                onQuestionSelect={jumpToQuestion}
              />
              <button
                onClick={finishQuiz}
                className="w-full mt-4 px-4 sm:px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center"
              >
                Finish Quiz <RefreshCw className="ml-2" size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <p className="mb-4">Are you sure you want to go back to the main menu? Your progress will be lost.</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleConfirmation(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
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

export default QuizApp;