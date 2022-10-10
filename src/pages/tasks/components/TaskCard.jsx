import Link from "next/link";
import styled from "styled-components";

const STCard = styled.article`
  position: relative;

  padding: 1rem;
  border-bottom: 10px solid lightseagreen;

  background-color: darkslategrey;
  border-radius: 10px;
`;

const STButton = styled.button`
  margin: 0.4rem;

  background-color: ${({ bgCol }) => bgCol || "initial"};

  color: #fff;
`;

export function TaskCard({ title, handleDelete }) {
  return (
    <STCard>
      <h3>{title}</h3>
      <STButton onClick={handleDelete} bgCol="#c80000">
        DELETE
      </STButton>
      <Link href="/tasks/edit">
        <STButton bgCol="#004fe2">EDIT</STButton>
      </Link>
    </STCard>
  );
}
