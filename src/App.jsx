import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LightRays from './components/LightRays.jsx';
import ContactsTable from "./components/ContactsTable";
import ContactProfile from "./components/ContactProfile";

function App() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setContacts(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching contacts:', err)
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="app-loading-screen">
        <h2>Loading contacts...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        {/* background layer */}
        {/* credit to Light Rays background effect by ReactBits */}
        {/* Integrated and customised by Arkah Nwe */}
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />

        {/* content layer */}
        <div className="content">
          <Routes>
            <Route path="/" element={<ContactsTable contacts={contacts} />} />
            <Route
              path="/contact/:id"
              element={<ContactProfile contacts={contacts} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;