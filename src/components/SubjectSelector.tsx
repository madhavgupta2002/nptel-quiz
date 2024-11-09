import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Subject {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

interface SubjectSelectorProps {
  subjects: Subject[];
  onSelect: (subjectId: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ subjects, onSelect }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">NPTEL Courses</h1>
        <p className="text-lg text-indigo-700">Select a subject to start practicing</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => onSelect(subject.id)}
          >
            <div className="relative h-48">
              <img
                src={subject.image}
                alt={subject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <subject.icon className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-indigo-900 mb-2">{subject.title}</h3>
              <p className="text-indigo-600">{subject.description}</p>
              <button
                className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Start Practice
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;