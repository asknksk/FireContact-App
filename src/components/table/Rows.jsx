import React from "react";
import { GrTrash } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";

const Rows = ({ row }) => {
  return (
    <>
      <td>{row.name}</td>
      <td>{row.phoneNumber}</td>
      <td>{row.gender}</td>
      <td>
        <GrTrash />
      </td>
      <td>
        <FiEdit />
      </td>
    </>
  );
};

export default Rows;
