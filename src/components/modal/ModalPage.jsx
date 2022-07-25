import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { db } from "../utils/firebase";

const ModalPage = ({ setShow, show, contect, setUpdateInfo, updateInfo }) => {
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateDoc(doc(db, "contact", updateInfo.id), {
      name: updateInfo.name,
      phoneNumber: updateInfo.phoneNumber,
      gender: updateInfo.gender,
    });
    handleClose();
  };

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
            value={updateInfo.name}
            placeholder="Name"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="number"
            className="form-control mb-3"
            name="phoneNumber"
            aria-describedby="helpId"
            value={updateInfo.phoneNumber}
            placeholder="Phone Number"
            onChange={(e) => handleChange(e)}
            required
          />

          <select
            className="form-select"
            aria-label="Default select example"
            value={updateInfo.gender}
            name="gender"
            onChange={(e) => handleChange(e)}
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
        <Button variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPage;
