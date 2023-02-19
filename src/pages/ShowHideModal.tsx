import { Title, Subtitle } from "../components";
import { Modal, ModalContent, ModalAction, Button } from "../theme/daisyui";
import * as D from "../data";

import { useToggle } from "../hooks";
import { useCallback } from "react";

export default function ModalTest() {
  const [open, toggleOpen] = useToggle(false);
  const onAccept = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      <Modal open={open}>
        <ModalContent
          closeIconClassName="btn-primary btn-online"
          onCloseIconClicked={toggleOpen}
        >
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <button className="btn btn-primary" onClick={onAccept}>
              Accept
            </button>
            <button className="btn" onClick={toggleOpen}>
              Close
            </button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  );
}
