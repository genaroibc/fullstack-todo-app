import { Modal, Button } from "semantic-ui-react";

export function CustomModal({
  description,
  open,
  onNegativeAction,
  onPositiveAction,
  negativeText,
  positiveText,
}) {
  return (
    <Modal style={{ textAlign: "center" }} open={open}>
      <Modal.Content scrolling={true} style={{ backgroundColor: "#343434" }}>
        <Modal.Description
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            margin: "1rem auto 2rem",
          }}
        >
          {description}
        </Modal.Description>
        <Modal.Actions>
          <Button color={"facebook"} onClick={onNegativeAction}>
            {negativeText}
          </Button>

          <Button color={"youtube"} onClick={onPositiveAction}>
            {positiveText}
          </Button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
}
