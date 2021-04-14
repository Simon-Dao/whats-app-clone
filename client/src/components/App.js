import React from 'react'
import { ContactsProvider } from '../contexts/ContactContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import Login from './Login'
import {ConversationsProvider} from '../contexts/ConversationsContext'

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id}/>
      </ConversationsProvider>
    </ContactsProvider>
  )
  
  return (
    id ? dashboard : <Login onIdSubmit={setId}/>
  );
}

export default App;