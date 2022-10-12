import { useState } from "react";
import { updateTask } from "services/updateTask";
import { TaskForm } from "./components/TaskForm";

const TASK_DESCRIPTION_NAME = "task-description";
const TASK_TITLE_NAME = "task-title";

const inputNames = {
  description: TASK_DESCRIPTION_NAME,
  title: TASK_TITLE_NAME,
};

export default function UpdateTaskPage({ task = {} }) {
  const [taskStatus, setTaskStatus] = useState("");

  const inputValues = {
    description: task.description,
    title: task.title,
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target[TASK_TITLE_NAME].value;
    const description = e.target[TASK_DESCRIPTION_NAME].value;

    const response = await updateTask(task._id, { title, description });

    if (!response.ok) return console.error(response);

    setTaskStatus("Task updated successfully");
  };

  return (
    <article>
      <TaskForm
        handleSubmit={handleSubmit}
        inputNames={inputNames}
        inputValues={inputValues}
      />

      {taskStatus && <h3>{taskStatus}</h3>}
    </article>
  );
}

export async function getServerSideProps({ query: { id } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${id}`
  );

  const task = await response.json();

  return {
    props: {
      task,
    },
  };
}
