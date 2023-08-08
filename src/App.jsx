import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import UserContext from './context/UserContext';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const users = await res.json();
      setUsers(users);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ users, setUsers }}>
        <>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:username" element={<User />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
