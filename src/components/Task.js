import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/api";

const Task = ({ task }) => {
  const queryClient = useQueryClient();

  const updateTaskMutation = useMutation((updatedTask) =>
    updateTask(task.id, updatedTask)
  );

  const handleToggleUrgent = () => {
    const updatedTask = { ...task, urgent: !task.urgent };
    updateTaskMutation.mutate(updatedTask, {
      onSuccess: () => {
        queryClient.invalidateQueries("tasks");
      },
    });
  };

  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent) " : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={handleToggleUrgent}
      >
        {task.urgent ? "Make Non-Urgent" : "Make Urgent"}
      </span>
    </div>
  );
};

export default Task;
