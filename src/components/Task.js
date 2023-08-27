const Task = ({ task }) => {
  return (
    <div>
      {task.description}. Urgent: {task.urgent ? " Yes" : " No"}
    </div>
  );
};

export default Task;
