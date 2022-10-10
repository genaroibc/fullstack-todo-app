import { deleteTask } from "services/deleteTask";
import { TasksList } from "./components/TasksList";

export default function TasksPage({ tasks = [] }) {
  const handleDelete = async task_id => {
    const response = await deleteTask(task_id);
    if (!response.ok) console.error(response);
  };

  return (
    <main>
      <h1>Tasks list:</h1>

      <TasksList tasks={tasks} handleDelete={handleDelete} />

      {tasks.lenght && <h3>No tasks yet...</h3>}
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_TASKS_API_URL);
  const tasks = await response.json();

  return {
    props: {
      tasks,
    },
  };
}
