import { useState } from "react";
import { updateTask } from "services/updateTask";
import { TaskForm } from "components/TaskForm";

const TASK_DESCRIPTION_NAME = "task-description";
const TASK_TITLE_NAME = "task-title";

const INPUT_NAMES = {
  description: TASK_DESCRIPTION_NAME,
  title: TASK_TITLE_NAME
};

export default function UpdateTaskPage({ task = {} }) {
  const inputValues = {
    description: task.description,
    title: task.title
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target[TASK_TITLE_NAME].value;
    const description = e.target[TASK_DESCRIPTION_NAME].value;

    const response = await updateTask(task._id, { title, description });

    if (!response.ok) return console.error(response);
  };

  return (
    <article>
      <TaskForm
        submitButtonText="Update Task"
        handleSubmit={handleSubmit}
        inputNames={INPUT_NAMES}
        inputValues={inputValues}
        redirectTo="/tasks"
      />
    </article>
  );
}

export async function getServerSideProps({ query: { id }, req }) {
  const URL = `${process.env.NEXT_PUBLIC_TASKS_API_URL}/${id}`;

  const response = await fetch(URL, {
    headers: {
      cookie: req.headers.cookie
    }
  });

  const task = await response.json();

  return {
    props: {
      task
    }
  };
}
