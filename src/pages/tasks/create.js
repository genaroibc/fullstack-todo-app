import { useState } from "react";
import { createTask } from "services/createTask";
import { TaskForm } from "./components/TaskForm";

const TASK_DESCRIPTION_NAME = "task-description";
const TASK_TITLE_NAME = "task-title";

const inputsName = {
  description: TASK_DESCRIPTION_NAME,
  title: TASK_TITLE_NAME,
};

export default function CreatePage() {
  const [tasksStatus, setTasksStatus] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target[TASK_TITLE_NAME].value;
    const description = e.target[TASK_DESCRIPTION_NAME].value;

    const response = await createTask({ title, description });

    if (!response.ok) return console.error(response);

    setTasksStatus("Task created successfully");
  };

  return (
    <>
      <TaskForm inputsName={inputsName} handleSubmit={handleSubmit} />
      <h3>{tasksStatus}</h3>
    </>
  );
}
