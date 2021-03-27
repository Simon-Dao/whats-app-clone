import React, {useState} from 'react'
import Login from './login'

function App() {

  const [id, setId] = useState()

  return (
    <div className="App">
      {id}
      
      <Login onIdSubmit={setId}/>
    </div>
  );
}

export default App;