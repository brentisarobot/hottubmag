import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://hottubmagazine.com" target="_blank">
          <img src="/src/assets/htlogo.png" className="logo" alt="Hot Tub logo" />
        </a>
      </div>
      <h1>How many minutes have you relaxed today?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Minutes: {count}
        </button>
      </div>
    </div>
  )
}

export default App
