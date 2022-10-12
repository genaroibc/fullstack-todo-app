import { TaskCard } from "./TaskCard";
import { v4 as uuid } from "uuid";
import { Container } from "semantic-ui-react";

export function TasksList({ tasks = [], handleDelete }) {
  return (
    <Container>
      {tasks.map(task => (
        <TaskCard
          key={uuid()}
          handleDelete={() => handleDelete(task._id)}
          {...task}
        />
      ))}
    </Container>
  );
}
