import React from 'react'
import { ContactsProvider } from '../contexts/ContactContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import Login from './Login'

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )
  
  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  );
}

export default App;