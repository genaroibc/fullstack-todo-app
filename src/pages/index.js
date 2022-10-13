import { List, ListItem } from "semantic-ui-react";

export default function HomePage() {
  return (
    <>
      <h1>Tasks App with MongoDB, Mongoose and Next!</h1>
      <h2>Features:</h2>
      <List>
        <ListItem>Create, Update and Delete tasks</ListItem>
        <ListItem>Login and access through any device</ListItem>
      </List>
    </>
  );
}
