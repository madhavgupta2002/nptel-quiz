import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import QuizApp from './components/QuizApp';
import SubjectSelector from './components/SubjectSelector';

const SUBJECTS = [
  {
    id: 'wildlife-ecology',
    title: 'Wildlife Ecology',
    description: 'Study of interactions between wildlife species, their habitats, and human impacts',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  // More subjects can be added here
];

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {selectedSubject ? (
        <QuizApp subject={selectedSubject} onBack={handleBackToSubjects} />
      ) : (
        <SubjectSelector subjects={SUBJECTS} onSelect={handleSubjectSelect} />
      )}
    </div>
  );
};

export default App;