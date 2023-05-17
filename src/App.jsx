import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Content.jsx'
import List from './Content.jsx'
import ChildComponent from './Components/FunctComponents/FunctComponents'

function App() {
  const [count, setCount] = useState(0)
  const me = <a href='https://www.linkedin.com/in/manuelgardon/'>Manuel</a>
  const msg = "Today, we learnt about class & functional components + prop Children + fragment"

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
    
        <ChildComponent name="Juan" message={msg}/>

      </div>
    
    </div>
)



}

export default App
