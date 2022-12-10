import Link from "next/link";
import { Button, Card, Container } from "semantic-ui-react";

const priorityColors = {
  low: "green",
  medium: "blue",
  high: "red"
};

export function TaskCard({
  title,
  description,
  priority = "low",
  _id,
  handleDelete
}) {
  return (
    <>
      <Card
        fluid={true}
        style={{
          padding: "1rem",
          backgroundColor: "slateblue",
          position: "relative"
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: priorityColors[priority],
            padding: "1rem",
            borderRadius: "10px !important"
          }}
        >
          {priority}
        </span>
        <Card.Header>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bolder",
              margin: "1rem auto"
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
          <Link href={`/${_id}`}>
            <Button color={"twitter"}>EDIT</Button>
          </Link>
        </Container>
      </Card>
    </>
  );
}
