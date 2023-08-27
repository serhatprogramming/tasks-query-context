import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/api";

const TaskForm = () => {
  const queryClient = useQueryClient();

  const addTaskMutation = useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const taskDescription = event.target.taskDescription.value;
    if (taskDescription) {
      addTaskMutation.mutate({ description: taskDescription, urgent: false });
      event.target.taskDescription.value = "";
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          name="taskDescription"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
