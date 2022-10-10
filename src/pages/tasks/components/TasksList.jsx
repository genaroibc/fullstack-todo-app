import { TaskCard } from "./TaskCard";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const STContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;

  padding: 1rem;
`;

export function TasksList({ tasks = [], handleDelete }) {
  return (
    <STContainer>
      {tasks.map(task => (
        <TaskCard
          key={uuid()}
          handleDelete={() => handleDelete(task._id)}
          {...task}
        />
      ))}
    </STContainer>
  );
}
