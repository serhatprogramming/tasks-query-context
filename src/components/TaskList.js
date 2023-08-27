import Task from "./Task";
import { useTasksQuery } from "../hooks/useTasksQuery";
import { useFilterContext } from "../contexts/FilterContext";
const TaskList = () => {
  const { data: tasks, isLoading, isError } = useTasksQuery();

  const { filter } = useFilterContext();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching tasks</p>;
  }

  const filteredTasks =
    filter === "urgent"
      ? tasks.filter((task) => task.urgent)
      : filter === "non-urgent"
      ? tasks.filter((task) => !task.urgent)
      : tasks;

  return (
    <div>
      <h3>Tasks</h3>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
