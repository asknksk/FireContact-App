import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import ModalPage from "../modal/ModalPage";
import Rows from "../table/Rows";
import { addContact, db } from "../utils/firebase";

const FormPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
  });
  const [contect, setContect] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // console.log(inputs);

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
  // console.log(contect);
  // contect.map((row) => {
  //   console.log(row);
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(inputs);
    setInputs({
      name: "",
      phoneNumber: "",
      gender: "",
    });
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-evenly">
      <div>
        <h1>{`<ed8en />`} DESIGN</h1>
        <h2>ADD CONTACT</h2>
        <form className="d-flex flex-column mt-2" onSubmit={handleSubmit}>
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
            <option selected>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
      <div className="d-flex flex-column">
        <h2>ADD CONTACT</h2>
        <table className="table table-striped table-hover table-bordered">
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
                  <Rows row={row} setShow={setShow} />
                </tr>
              );
            })}
          </tbody>
        </table>
        {show && <ModalPage setShow={setShow} show={show} />}
      </div>
    </div>
  );
};

export default FormPage;
