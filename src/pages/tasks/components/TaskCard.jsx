import styled from "styled-components";

const STCard = styled.article`
  position: relative;

  padding: 1rem;
  border-bottom: 10px solid lightseagreen;

  background-color: darkslategrey;
  border-radius: 10px;
`;

const STButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  margin: 1rem;

  background-color: tomato;
  color: #fff;
`;

export function TaskCard({ title = "" }) {
  return (
    <STCard>
      <h3>{title}</h3>
      <STButton>Add</STButton>
    </STCard>
  );
}
