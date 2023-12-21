import './App.css'
import useCounter from './hooks/useCounter'

// Regra 1: Onde usar os hooks
// Regra 2: A orderm dos hooks

function App() {
  const couter = useCounter()

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={couter.increment}>
          count is {couter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
