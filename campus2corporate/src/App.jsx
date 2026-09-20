import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Aptitude from './components/Aptitude';
import Coding from './components/Coding';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import MockInterview from './components/MockInterview';
import JobPortal from './components/JobPortal';
import ResourceHub from './components/ResourceHub';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [darkMode, setDarkMode] = React.useState(true); // default to sleek dark mode
  const [user, setUser] = React.useState(null);

  // Apply dark mode styling class to root element
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0B0F19';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F8FAFC';
    }
  }, [darkMode]);

  // Dynamic Page Rendering Router
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} user={user} />;
      case 'about':
        return <About />;
      case 'auth':
        return <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'dashboard':
        return user ? <Dashboard user={user} setCurrentPage={setCurrentPage} /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'aptitude':
        return user ? <Aptitude /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'coding':
        return user ? <Coding /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'resume':
        return user ? <ResumeAnalyzer /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'interview':
        return user ? <MockInterview /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'jobs':
        return user ? <JobPortal /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'resources':
        return user ? <ResourceHub /> : <Auth setUser={setUser} setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} user={user} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-darkBg transition-colors duration-300">
      <div>
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          user={user}
          setUser={setUser}
        />
        <main className="flex-grow transition-opacity duration-200">
          {renderPageContent()}
        </main>
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
