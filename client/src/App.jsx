import { useState } from 'react'
import './App.css'
import './index.css'
import TaskManager from './components/TaskManager';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">

      <h1> WorkWise </h1>

      <h2>Task Manager</h2>

      <div className='top'>
        <input type="text" placeholder='Add Tasks...'/>

        <div className='add'>Add</div>
      </div>
  

      </div>
      </div>
      
    
    </div>
  );
}

export default App;
