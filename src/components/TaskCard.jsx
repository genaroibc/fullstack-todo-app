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
          <h2 style={{ fontSize: "1.3rem", fontWeight: "bolder" }}>{title}</h2>
        </Card.Header>

        <Card.Description>
          <p>{description}</p>
        </Card.Description>

        <Container style={{ padding: "1rem" }}>
          <Button color={"youtube"} onClick={handleDelete} bgCol="#c80000">
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
