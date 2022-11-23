import styled from "styled-components";

const STErrorMessage = styled.div`
  background-color: #c20101;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 400px;
  border-radius: 10px;
`;

export function ErrorMessage({ error }) {
  return (
    <>
      {error ? (
        <STErrorMessage>Error: {error.error_message}</STErrorMessage>
      ) : null}
    </>
  );
}
