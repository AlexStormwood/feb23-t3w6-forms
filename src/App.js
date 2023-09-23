
// React Router parts:
// - BrowserRouter needs to exist higher up in the component tree than whatever we are writing Routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <About /> 
// - Route specifies URL and component, belongs to Routes
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

      </Routes>

    </div>
  );
}

export default App;
