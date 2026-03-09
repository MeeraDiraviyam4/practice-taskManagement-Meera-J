// src/components/TaskList.jsx
import { Link } from 'react-router-dom';

const tasks = [
  {
    id: 1,
    title: 'Finish React homework',
    description: 'Complete the Task Management app for Lesson 4.',
  },
  {
    id: 2,
    title: 'Practice Git commands',
    description: 'Review git status, add, commit, push, and pull.',
  },
  {
    id: 3,
    title: 'Plan weekend coding',
    description: 'Decide which personal project to work on.',
  },
];

function TaskList() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Task List</h1>
      <p>Click a task to view details.</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: '0.75rem',
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <h2 style={{ margin: '0 0 0.25rem 0' }}>{task.title}</h2>
            <p style={{ margin: '0 0 0.5rem 0' }}>
              {task.description.slice(0, 60)}...
            </p>
            <Link to={`/task/${task.id}`} style={{ color: '#2563eb' }}>
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
