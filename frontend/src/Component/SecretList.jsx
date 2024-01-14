import React, { useContext, useState } from "react";
import SecretContext from "./Context/SecretContext";
import { Modal, Button, Form } from "react-bootstrap";
import SecretCard from "./SecretCard";

function SecretList({ idOfSecret, description, user, category }) {
  const context = useContext(SecretContext);
  const { editSecret } = context;
  const [showModal, setShowModal] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState(category);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleUpdateSecret = () => {
    editSecret(idOfSecret, updatedDescription, updatedCategory);
    setShowModal(false);
  };

  return (
    <>
      <SecretCard
        user={user}
        category={category}
        handleUpdateClick={handleUpdateClick}
        idOfSecret={idOfSecret}
        description={description}
      />
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Secret</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                value={updatedCategory}
                onChange={(e) => setUpdatedCategory(e.target.value)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSecret}>
            Update Secret
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SecretList;
