import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalPage = ({ setShow, show }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <form className="d-flex flex-column mt-2">
          <input
            type="text"
            className="form-control mb-3 "
            name="name"
            aria-describedby="helpId"
            // value={inputs.name}
            placeholder="Name"
            // onChange={handleChange}
            required
          />
          <input
            type="number"
            className="form-control mb-3"
            name="phoneNumber"
            aria-describedby="helpId"
            // value={inputs.phoneNumber}
            placeholder="Phone Number"
            // onChange={handleChange}
            required
          />

          <select
            className="form-select"
            aria-label="Default select example"
            // value={inputs.gender}
            name="gender"
            // onChange={handleChange}
            required
          >
            <option selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPage;
