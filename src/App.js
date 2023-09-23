
// React Router parts:
// - BrowserRouter needs to exist higher up in the component tree than whatever we are writing Routes in
// - Routes need to exist, determine what content is rendered on which route eg. /about for <About /> 
// - Route specifies URL and component, belongs to Routes
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* route for /about opening  */}
        {/* <Route path="/about" element={<AboutPage />}> */}

          {/* route for /about/contact */}
          {/* <Route path="/about/contact" element={<ContactPage />} /> */}

        {/* route for /about closing  */}
        {/* </Route> */}

        {/* route for /about opening  */}
        {/* <Route path="about" element={<AboutPage />}> */}

          {/* route for /about/contact */}
          {/* <Route path="contact" element={<ContactPage />} /> */}

          {/* route for /about closing  */}
        {/* </Route> */}


        <Route path="/about" element={<Outlet />}>
          <Route index element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
