import  { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './components/HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading to show the loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary-50 font-sans text-dark-900 overflow-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App