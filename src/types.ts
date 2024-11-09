export interface Option {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface SubjectData {
  name: string;
  description: string;
  questions: Question[];
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