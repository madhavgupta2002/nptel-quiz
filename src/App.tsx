import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
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
      {selectedSubject ? (
        <QuizApp subject={selectedSubject} onBack={handleBackToSubjects} />
      ) : (
        <SubjectSelector subjects={SUBJECTS} onSelect={handleSubjectSelect} />
      )}
    </div>
  );
};

export default App;