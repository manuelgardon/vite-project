import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Content.jsx'
import List from './Content.jsx'

function App() {
  const [count, setCount] = useState(0)
  const me = <a href='https://www.linkedin.com/in/manuelgardon/'>Manuel</a>

  return (
    <div className="App">
    
      <div>
        
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>

      </div>

      <h1>Vite + React with {me}</h1>
      
      <div className="card">
        <List/>
      </div>

      <h2>Congratulations! Now, you have your own React + Vite project.</h2>
    
    </div>
)



}

export default App
