// src/components/TaskDetail.jsx
import { useParams, Link } from 'react-router-dom';

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

function TaskDetail() {
  const { id } = useParams(); // id comes from the URL, e.g. /task/2
  const taskId = Number(id);
  const task = tasks.find((t) => t.id === taskId); // may be undefined if invalid id[]

  if (!id) {
    return (
      <div style={{ padding: '1rem' }}>
        <h1>Task not found</h1>
        <p>Missing task ID in the URL.</p>
        <Link to="/">Back to task list</Link>
      </div>
    );
  }

  if (!task) {
    return (
      <div style={{ padding: '1rem' }}>
        <h1>Task not found</h1>
        <p>No task exists with ID: {id}</p>
        <Link to="/">Back to task list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <Link to="/" style={{ color: '#2563eb' }}>
        ← Back to task list
      </Link>
    </div>
  );
}

export default TaskDetail;
