import { Table } from "react-bootstrap";

const FormPage = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-evenly">
      <div>
        <h1>{`<ed8en />`} DESIGN</h1>
        <h2>ADD CONTACT</h2>
        <form className="d-flex flex-column mt-2">
          <input
            type="text"
            className="form-control mb-3 "
            name="name"
            id=""
            aria-describedby="helpId"
            placeholder="Name"
          />
          <input
            type="number"
            className="form-control mb-3"
            name="phoneNumber"
            id=""
            aria-describedby="helpId"
            placeholder="Phone Number"
          />

          <select className="form-select" aria-label="Default select example">
            <option selected disabled>
              Gender
            </option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormPage;
