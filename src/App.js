import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const tasks = [
    { id: 1, description: "task 1", urgent: false },
    { id: 2, description: "task 2", urgent: true },
  ];
  return (
    <div>
      <h2>Tasks with Query and Context</h2>
      <TaskList tasks={tasks} />
      <TaskForm />
    </div>
  );
};

export default App;
