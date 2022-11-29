import { createTask } from "services/createTask";
import { TaskForm } from "components/TaskForm";

const TASK_DESCRIPTION_NAME = "task-description";
const TASK_TITLE_NAME = "task-title";
const TASK_PRIORITY_NAME = "task-priority";

const INPUT_NAMES = {
  description: TASK_DESCRIPTION_NAME,
  title: TASK_TITLE_NAME,
  priority: TASK_PRIORITY_NAME
};

export default function CreatePage() {
  const handleSubmit = async e => {
    e.preventDefault();

    const title = e.target[TASK_TITLE_NAME].value;
    const description = e.target[TASK_DESCRIPTION_NAME].value;
    const priority = e.target[TASK_PRIORITY_NAME].value;

    try {
      const response = await createTask({
        taskData: { title, description, priority }
      });

      if (!response.ok) throw new Error(response);
    } catch (error) {
      return console.error(error);
    }
  };

  return (
    <>
      <TaskForm
        submitButtonText="Create Task"
        inputNames={INPUT_NAMES}
        handleSubmit={handleSubmit}
        redirectTo="/tasks"
      />
    </>
  );
}
