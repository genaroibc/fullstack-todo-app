import { updateTask } from "services/updateTask";
import { TaskForm } from "components/TaskForm";
import { getOneTask } from "services/getOneTask";

const TASK_DESCRIPTION_NAME = "task-description";
const TASK_TITLE_NAME = "task-title";
const TASK_PRIORITY_NAME = "task-priority";

const INPUT_NAMES = {
  description: TASK_DESCRIPTION_NAME,
  title: TASK_TITLE_NAME,
  priority: TASK_PRIORITY_NAME
};

export default function UpdateTaskPage({ task = {} }) {
  const inputValues = {
    description: task.description,
    title: task.title,
    priority: task.priority
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target[TASK_TITLE_NAME].value;
    const description = e.target[TASK_DESCRIPTION_NAME].value;
    const priority = e.target[TASK_PRIORITY_NAME].value;

    const response = await updateTask({
      taskId: task._id,
      taskData: { title, description, priority }
    });

    if (!response.ok) return console.error(response);
  };

  return (
    <article>
      <TaskForm
        submitButtonText="Update Task"
        handleSubmit={handleSubmit}
        inputNames={INPUT_NAMES}
        inputValues={inputValues}
        redirectTo="/"
      />
    </article>
  );
}

export async function getServerSideProps({ query, req }) {
  const response = await getOneTask({
    cookie: req.headers.cookie,
    taskId: query.id
  });

  const task = await response.json();

  return {
    props: {
      task
    }
  };
}
