import Link from "next/link";
import { Button, Card, Container } from "semantic-ui-react";

export function TaskCard({ title, description, _id, handleDelete }) {
  return (
    <>
      <Card
        fluid={true}
        style={{ padding: "1rem", backgroundColor: "slateblue" }}
      >
        <Card.Header>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bolder",
              margin: "1rem auto",
            }}
          >
            {title}
          </h2>
        </Card.Header>

        <Card.Description>
          <p style={{ fontSize: "1.4rem" }}>{description}</p>
        </Card.Description>

        <Container style={{ padding: "1rem" }}>
          <Button color={"youtube"} onClick={handleDelete}>
            DELETE
          </Button>
          <Link href={`/tasks/${_id}`}>
            <Button color={"twitter"}>EDIT</Button>
          </Link>
        </Container>
      </Card>
    </>
  );
}
