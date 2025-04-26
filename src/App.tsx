import React, { useState, useEffect } from 'react';
import { BookOpen, Brain, Linkedin, Moon, Search } from 'lucide-react';
import QuizApp from './components/QuizApp';
import SubjectSelector from './components/SubjectSelector';
import { useDarkMode } from './contexts/DarkModeContext';

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
  },
  {
    id: 'Cloud Computing',
    title: 'Cloud Computing',
    description: 'Learn about cloud service models, deployment models, virtualization, and cloud platforms',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Forests and their Management',
    title: 'Forests and their Management',
    description: 'Learn about forest ecosystems, sustainable forestry practices, conservation, and management techniques',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Education for Sustainable Development',
    title: 'Education for Sustainable Development',
    description: 'Learn about sustainability principles, environmental education, and strategies for promoting sustainable development',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Conservation Economics',
    title: 'Conservation Economics',
    description: 'Study of economic principles applied to natural resource conservation, ecosystem valuation, and sustainable management',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Network Security',
    title: 'Network Security',
    description: 'Learn about network vulnerabilities, security protocols, encryption techniques, and defense mechanisms',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'GPU Architectures and Programming',
    title: 'GPU Architecture and Programming',
    description: 'Learn about CPU/GPU architectures, SIMD/SIMT paradigms, and programming models like CUDA and OpenCL with optimization techniques',
    image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Introduction to Large Language Models (LLMs)',
    title: 'Introduction to Large Language Models (LLMs)',
    description: 'Learn about the architecture, training, capabilities, and applications of large language models in AI',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  },
  {
    id: 'Fuzzy Sets, Logic and Systems & Applications',
    title: 'Fuzzy Sets, Logic and Systems & Applications',
    description: 'Study fuzzy set theory, fuzzy logic systems, membership functions, and applications in control systems and decision making',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000',
    icon: BookOpen
  }
];

const App: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<typeof SUBJECTS[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredSubjects, setFilteredSubjects] = useState(SUBJECTS);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSubjects(SUBJECTS);
    } else {
      const filtered = SUBJECTS.filter(subject =>
        subject.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSubjects(filtered);
    }
  }, [searchQuery]);

  const handleSubjectSelect = (subject: typeof SUBJECTS[0]) => {
    setSelectedSubject(subject);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'}`}>
      <nav className={`${isDarkMode ? 'bg-gray-800/70' : 'bg-indigo-50/70'} backdrop-blur-md shadow-md sticky top-0 z-10`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={handleBackToSubjects}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity group"
          >
            <Brain className={`h-8 w-8 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} group-hover:animate-pulse`} />
            <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} group-hover:text-indigo-500 transition-colors`}>NPTEL Course Quiz</span>
          </button>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/madhavgupta2002"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-indigo-400' : 'border-gray-300 hover:border-indigo-500'} rounded-full px-3 py-1 ${isDarkMode ? 'text-gray-300 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-600'} transition-all hover:shadow-md`}
            >
              <span className="text-sm">Made by Madhav Gupta</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 ${isDarkMode ? 'text-gray-300 hover:text-indigo-300 hover:bg-gray-700' : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-100'} transition-all rounded-full`}
              aria-label="Toggle dark mode"
            >
              <Moon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {!selectedSubject && (
        <div className={`container mx-auto px-4 py-6 max-w-3xl`}>
          <div className={`relative mb-8 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}>
              <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <input
              type="text"
              placeholder="Search for courses by name or description..."
              value={searchQuery}
              onChange={handleSearchChange}
              className={`w-full pl-10 pr-4 py-3 rounded-xl ${isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500'
                } border shadow-sm focus:outline-none focus:ring-2 transition-all`}
            />
          </div>
        </div>
      )}

      {selectedSubject ? (
        <QuizApp subject={selectedSubject} onBack={handleBackToSubjects} />
      ) : (
        <SubjectSelector subjects={filteredSubjects} onSelect={handleSubjectSelect} />
      )}

      {!selectedSubject && filteredSubjects.length === 0 && (
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            No courses found matching "{searchQuery}". Try a different search term.
          </h3>
        </div>
      )}
    </div>
  );
};

export default App;