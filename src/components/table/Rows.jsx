import React from "react";
import { GrTrash } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { db, deleteContact } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Rows = ({ row }) => {
  const handleDelete = async (id) => {
    await deleteContact(id);
  };

  const handleEdit = async (id) => {
    await updateDoc(doc(db, "contact", id), {
      name: "deneme",
      phoneNumber: "123",
      gender: "male",
    });
    console.log(id);
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
        <FiEdit onClick={() => handleEdit(row.id)} />
      </td>
    </>
  );
};

export default Rows;
