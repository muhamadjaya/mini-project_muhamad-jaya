import React from "react";
import { Link } from "react-router-dom";

const TableWisata = ({
  idx,
  id,
  nama_wisata,
  kategori,
  alamat,
  deskripsi,
  onDeleteData,
}) => {
  return (
    <>
      <td className="text-center">{idx + 1}</td>
      <td>{nama_wisata}</td>
      <td className="text-center">{kategori}</td>
      <td>{alamat}</td>
      <td>{deskripsi.substr(0, 50)}</td>
      <td className="text-center">
        <Link to={`ubah-wisata/${id}`} className="btn btn-outline-primary">
          Update
        </Link>
      </td>
      <td className="text-center">
        <button className="btn btn-outline-danger" onClick={onDeleteData}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TableWisata;
