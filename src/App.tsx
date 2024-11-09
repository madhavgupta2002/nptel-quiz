import React, { useState } from 'react';
import { BookOpen, Brain, Linkedin, Moon } from 'lucide-react';
import QuizApp from './components/QuizApp';
import SubjectSelector from './components/SubjectSelector';

const SUBJECTS = [
  {
    id: 'Wildlife Ecology',
    title: 'Wildlife Ecology',
    description: 'Study of interactions between wildlife species, their habitats, and human impacts',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Psychology Of Learning',
    title: 'Psychology Of Learning',
    description: 'Study of cognitive processes, behavior, and how humans learn and develop',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Programming In Java',
    title: 'Programming In Java',
    description: 'Learn Java programming fundamentals, object-oriented concepts, and application development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Introduction to Internet of Things',
    title: 'Introduction to Internet of Things',
    description: 'Learn about IoT architecture, protocols, sensors, data processing and applications',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Ethical Hacking',
    title: 'Ethical Hacking',
    description: 'Learn cybersecurity concepts, penetration testing techniques, and ethical hacking methodologies',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  }

];

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[0] | null>(null);

  const handleSubjectSelect = (subject: typeof SUBJECTS[0]) => {
    setSelectedSubject(subject);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <nav className="bg-indigo-50/50 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">NPTEL Course Quiz</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/madhavgupta2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <span className="text-sm">Made by Madhav Gupta</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-100"
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {selectedSubject ? (
        <QuizApp subject={selectedSubject} onBack={handleBackToSubjects} />
      ) : (
        <SubjectSelector subjects={SUBJECTS} onSelect={handleSubjectSelect} />
      )}
    </div>
  );
};

export default App;