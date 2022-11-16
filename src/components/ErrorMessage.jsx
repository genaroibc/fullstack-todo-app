export function ErrorMessage({ error }) {
  return (
    <>
      {error ? (
        <div
          style={{
            backgroundColor: "#c20101",
            padding: "1rem",
            margin: "1rem auto",
            maxWidth: "400px",
            borderRadius: "10px"
          }}
        >
          Error: {error.error_message}
        </div>
      ) : null}
    </>
  );
}
