import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Moon, Sun, KeyRound } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Demonstration from './components/Demonstration';
import Detection from './components/Detection';
import Prevention from './components/Prevention';
import NotableCrimes from './components/NotableCrimes';
import Faqs from './components/Faqs';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <nav className="bg-white dark:bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <KeyRound className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">AnyaLogger</span>
                </div>
                <Navbar />
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/demonstration" element={<Demonstration />} />
              <Route path="/detection" element={<Detection />} />
              <Route path="/prevention" element={<Prevention />} />
              <Route path="/notable-crimes" element={<NotableCrimes />} />
              <Route path="/faqs" element={<Faqs />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;