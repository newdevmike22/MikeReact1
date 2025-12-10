import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["React Lesson", "Workout"]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return; // prevent empty tasks
    setTasks([...tasks, newTask]);
    setNewTask(""); // clear input
  };

  const deleteTask = (t) => {
    setTasks(tasks.filter((task) => task !== t));
  };

  return (
    <section>
      <ul>
        {tasks.map((t) => (
          <li key={t}>
            {t} <button onClick={() => deleteTask(t)}>Delete</button>
          </li>
        ))}
      </ul>

      <input type="text" value={newTask} placeholder="Add a task..." onChange={(e) => setNewTask(e.target.value)} />

      <button onClick={addTask}>Add Task</button>
    </section>
  );
};

export default ToDoList;
