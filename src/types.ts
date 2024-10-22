export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface Question {
  q: string;
  options: Option;
  answer: string;
  explanation: string;
}

export interface Assignment {
  [key: string]: Question[];
}

export type PracticeMode = 'assignment' | 'full';
export type QuestionOrder = 'random' | 'inOrder';

export interface QuizState {
  practiceMode: PracticeMode;
  questionOrder: QuestionOrder;
  currentAssignment: string;
  currentQuestionIndex: number;
  score: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  showResult: boolean;
  questions: Question[];
  incorrectAnswers: Question[];
  answeredQuestions: (string | null)[];
}