import React from "react";
import { Link } from "react-router-dom";

const TableBerita = ({
  idx,
  id,
  judul,
  deskripsi,
  tgl_posting,
  onDeleteData,
}) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>{judul}</td>
      <td>{deskripsi.substr(0, 50)}</td>
      <td className="text-center">
        {tgl_posting.substr(8, 2)}-{tgl_posting.substr(5, 2)}-
        {tgl_posting.substr(0, 4)}
      </td>
      <td className="text-end">
        <Link to={`ubah-berita/${id}`} className="btn btn-outline-primary">
          Update
        </Link>
      </td>
      <td className="text-start">
        <button className="btn btn-outline-danger" onClick={onDeleteData}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TableBerita;
