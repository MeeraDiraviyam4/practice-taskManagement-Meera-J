/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default <App>*/

// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList.jsx';
import TaskDetail from './components/TaskDetail.jsx';

function App() {
  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: 'white',
          minHeight: '100vh',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
      >
        <Routes>
          {/* Main task list page */}
          <Route path="/" element={<TaskList />} />

          {/* Dynamic route for a single task, :id is a URL parameter[][] */}
          <Route path="/task/:id" element={<TaskDetail />} />

          {/* Catch-all for invalid URLs */}
          <Route
            path="*"
            element={
              <div style={{ padding: '1rem' }}>
                <h1>Page not found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Back to task list</a>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
