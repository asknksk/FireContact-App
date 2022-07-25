import { GrTrash } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { deleteContact } from "../utils/firebase";

const Rows = ({ row, setShow, setUpdateInfo }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
  };

  const handleEdit = (id, name, phoneNumber, gender) => {
    setUpdateInfo({
      id: id,
      name: name,
      phoneNumber: phoneNumber,
      gender: gender,
    });
    setShow(true);
    // await updateDoc(doc(db, "contact", id), {
    //   name: "deneme",
    //   phoneNumber: "123",
    //   gender: "male",
    // });
    // console.log(id);
  };
  return (
    <>
      <td>{row.name}</td>
      <td>{row.phoneNumber}</td>
      <td>{row.gender}</td>
      <td>
        <GrTrash onClick={() => handleDelete(row.id)} />
      </td>
      <td>
        <FiEdit
          onClick={() =>
            handleEdit(row.id, row.name, row.phoneNumber, row.gender)
          }
        />
      </td>
    </>
  );
};

export default Rows;
