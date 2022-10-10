import { TasksList } from "./components/TasksList";

export default function TasksPage({ tasks = [] }) {
  return (
    <main>
      <h1>Tasks list:</h1>

      <TasksList tasks={tasks} />
    </main>
  );
}
