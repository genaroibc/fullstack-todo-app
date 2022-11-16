import { deleteTask } from "services/deleteTask";
import { TasksList } from "components/TasksList";
import { useState } from "react";
import { CustomModal } from "components/CustomModal";
import { Button } from "semantic-ui-react";
import Link from "next/link";

export default function TasksPage({ tasks = [] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const handleDelete = async task_id => {
    const response = await deleteTask(task_id);
    if (!response.ok) console.error(response);

    closeModal();
  };

  return (
    <main>
      <nav
        style={{
          position: "absolute",
          right: "2vw",
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "steelblue",
          maxWidth: "500px",
          minWidth: "100px"
        }}
      >
        <Link href="/tasks/create">New Task</Link>
      </nav>
      <h1>Tasks list:</h1>

      <TasksList
        tasks={tasks}
        handleDelete={task_id => {
          setTaskIdToDelete(task_id);
          openModal();
        }}
      />

      <CustomModal
        description={
          "Are you sure you want to delete this task? This action is permanent!"
        }
        open={modalIsOpen}
        onNegativeAction={closeModal}
        onPositiveAction={() => handleDelete(taskIdToDelete)}
        negativeText={"cancel"}
        positiveText={"delete"}
      />

      {tasks.lenght && <h3>No tasks yet...</h3>}
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const URL = process.env.NEXT_PUBLIC_TASKS_API_URL;
  const response = await fetch(URL, {
    headers: {
      Cookie: req.headers.cookie
    }
  });

  const tasks = await response.json();

  return {
    props: {
      tasks: tasks.error ? [] : tasks
    }
  };
}
