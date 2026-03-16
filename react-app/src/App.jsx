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
