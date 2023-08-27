import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";

const App = () => {
  return (
    <div>
      <h2>Tasks with Query and Context</h2>
      <TaskFilter />
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
