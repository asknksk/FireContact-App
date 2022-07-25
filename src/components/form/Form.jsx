import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Rows from "../table/Rows";
import { addContact, db, doc } from "../utils/firebase";

const FormPage = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
  });
  const [contect, setContect] = useState([]);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  // console.log(inputs);

  useEffect(() => {
    onSnapshot(collection(db, "contact"), (doc) => {
      setContect(doc.docs);
    });
  }, []);
  // console.log(contect[0].data());
  // contect.map((row) => {
  //   console.log(row.data());
  // });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(inputs);
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
            <option selected disabled>
              Gender
            </option>
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
                <tr>
                  <Rows row={row.data()} key={row.id} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormPage;
