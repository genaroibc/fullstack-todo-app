import { deleteTask } from "services/deleteTask";
import { TasksList } from "components/TasksList";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

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
      <h1>Tasks list:</h1>

      <TasksList
        tasks={tasks}
        handleDelete={task_id => {
          setTaskIdToDelete(task_id);
          openModal();
        }}
      />

      <Modal open={modalIsOpen}>
        <Modal.Content>
          <Modal.Description>
            Are you sure you want to delete this task? This action is
            permanent!!
          </Modal.Description>
          <Modal.Actions>
            <Button color={"facebook"} onClick={closeModal}>
              Cancel
            </Button>

            <Button
              color={"youtube"}
              onClick={() => handleDelete(taskIdToDelete)}
            >
              Delete
            </Button>
          </Modal.Actions>
        </Modal.Content>
      </Modal>

      {tasks.lenght && <h3>No tasks yet...</h3>}
    </main>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.VERCEL_URL);
  const tasks = await response.json();

  return {
    props: {
      tasks,
    },
  };
}
