import Link from "next/link";
import styled from "styled-components";

const STNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: sticky;
  top: 0;

  width: 100%;
  padding: 1rem;

  background-color: steelblue;
`;

export default function NavBar() {
  return (
    <STNav>
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/tasks/create">Create Task</Link>
    </STNav>
  );
}
