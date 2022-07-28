import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ModalPage from "../modal/ModalPage";
import Rows from "../table/Rows";
import { toastSuccessNotify, toastWarnNotify } from "../utils/customToastify";
import { addContact, db } from "../utils/firebase";

const FormPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
  });
  const [contect, setContect] = useState([]);
  const [show, setShow] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({});

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    onSnapshot(collection(db, "contact"), (doc) => {
      setContect(
        doc.docs.reduce(
          (contacts, contact) => [
            ...contacts,
            { ...contact.data(), id: contact.id },
          ],
          []
        )
      );
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.gender && inputs.name && inputs.phoneNumber) {
      await addContact(inputs);
      setInputs({
        name: "",
        phoneNumber: "",
        gender: "",
      });
      toastSuccessNotify("Success!");
    } else {
      toastWarnNotify("Please Select Gender");
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-evenly mt-5">
      <div className="text-center w-25">
        <h1 className="text-bg-light p-2">
          <a
            className="text-danger text-decoration-none"
            href="https://github.com/asknksk/FireContact-App"
          >{`<asknksk />`}</a>{" "}
          DESIGN
        </h1>
        <h2 className="text-bg-light p-2 ">ADD CONTACT</h2>
        <form
          className="d-flex flex-column mt-2 text-bg-light p-3 mt-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="form-control mb-3 "
            name="name"
            aria-describedby="helpId"
            value={inputs.name}
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="form-control mb-3"
            name="phoneNumber"
            aria-describedby="helpId"
            value={inputs.phoneNumber}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <select
            className="form-select"
            aria-label="Default select example"
            value={inputs.gender}
            name="gender"
            onChange={handleChange}
            required
          >
            <option dvalue="">Gender</option>
            <option dvalue="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit" className="btn btn-primary mt-3">
            Add
          </button>
        </form>
      </div>
      <div className="d-flex flex-column w-50">
        <h2 className="text-bg-light text-center p-2 border-non">CONTACTS</h2>
        <table className="table table-striped table-hover text-bg-light p-3 text-center">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Gender</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {contect?.map((row) => {
              return (
                <tr key={row.id}>
                  <Rows
                    row={row}
                    setShow={setShow}
                    setUpdateInfo={setUpdateInfo}
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
        {show && (
          <ModalPage
            setShow={setShow}
            show={show}
            contect={contect}
            setUpdateInfo={setUpdateInfo}
            updateInfo={updateInfo}
            setContect={setContect}
          />
        )}
      </div>
    </div>
  );
};

export default FormPage;
