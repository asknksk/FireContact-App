import { FiEdit, FiTrash2 } from "react-icons/fi";
import { deleteContact } from "../utils/firebase";
import { toastSuccessNotify } from "../utils/customToastify";

const Rows = ({ row, setShow, setUpdateInfo }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
    toastSuccessNotify("Deleted");
  };

  const handleEdit = (id, name, phoneNumber, gender) => {
    setUpdateInfo({
      id: id,
      name: name,
      phoneNumber: phoneNumber,
      gender: gender,
    });
    setShow(true);
  };
  return (
    <>
      <td>{row.name}</td>
      <td>{row.phoneNumber}</td>
      <td>{row.gender}</td>
      <td className="text-center">
        <FiTrash2
          className="text-danger cursor-pointer fs-4"
          onClick={() => handleDelete(row.id)}
        />
      </td>
      <td className="text-center">
        <FiEdit
          className="text-info cursor-pointer fs-4"
          onClick={() =>
            handleEdit(row.id, row.name, row.phoneNumber, row.gender)
          }
        />
      </td>
    </>
  );
};

export default Rows;
