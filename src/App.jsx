import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import ContactDetails from './components/ContactDetails'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {
    selectedContactId ? <ContactDetails/>: <ContactList setSelectedContactId={selectedContactId} /> 
    }
      
    </>
  )
}

export default App
