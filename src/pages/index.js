import { deleteTask } from "services/deleteTask";
import { TasksList } from "components/TasksList";
import { useState } from "react";
import { CustomModal } from "components/CustomModal";
import Link from "next/link";
import { getAllTasks } from "services/getAllTasks";
import { sortByPriority } from "utils/sortByPriority";

export default function HomePage({ propTasks = [] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState(null);
  const [tasks, setTasks] = useState(propTasks);

  const closeModal = () => setModalIsOpen(false);
  const openModal = () => setModalIsOpen(true);

  const handleDelete = async taskId => {
    const response = await deleteTask(taskId);
    const { tasks } = await response.json();

    if (!response.ok) return console.error(response);

    const sortedTasks = sortByPriority({ items: tasks });

    setTasks(sortedTasks);
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
        <Link href="/create">New Task</Link>
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

      {!tasks.length && <h3>No tasks yet...</h3>}
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const response = await getAllTasks({ cookie: req.headers.cookie });
  const tasks = await response.json();

  return {
    props: {
      propTasks: tasks.error ? [] : sortByPriority({ items: tasks })
    }
  };
}
