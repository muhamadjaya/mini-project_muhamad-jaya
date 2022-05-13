import React from "react";
import { Link } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { DELETE_BERITA_BY_ID } from "../../graphql/mutations";

import LoadingSvg from "../LoadingSvg/LoadingSvg";

import Swal from "sweetalert2";

const TableBerita = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  const [deleteBerita, { loading: loadingDelete }] = useMutation(
    DELETE_BERITA_BY_ID,
    {
      onCompleted: (data) => {
        refetch();
      },
      onError: (error) => {
        console.log("Error in mutation delete", { error });
      },
    }
  );

  const onDeleteData = (idx) => {
    Swal.fire({
      title: "Yakin hapus data ini?",
      text: "Kamu tidak dapat mengembalikan data yang telah dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBerita({
          variables: {
            id: idx,
          },
        });
        Swal.fire("Berhasil!", "Data berhasil dihapus.", "success");
      } else {
        Swal.fire("Batal", "Data batal dihapus", "error");
      }
    });
  };

  return (
    <section className="recent">
      <div className="activity-grid">
        <div className="activity-card">
          {/* <h3>Kelola Data Berita</h3> */}
          <Link
            to="/kelolaberita/inputberita"
            className="btn btn-primary my-2 ms-2 btn-tambah-berita"
          >
            Tambah Berita
          </Link>
          <div className="table-responsive">
            {loading ? (
              <LoadingSvg />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Judul Berita</th>
                    <th>Deskripsi</th>
                    <th>Tanggal Posting</th>
                    <th className="text-center" colSpan={2}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.berita.map((value, valueIdx) => (
                    <tr key={valueIdx} data-key={value.id}>
                      <td className="text-center">{valueIdx + 1}</td>
                      <td>{value.judul}</td>
                      <td>{value.deskripsi.substr(0, 50)}</td>
                      <td>
                        {value.tgl_posting.substr(8, 2)}-
                        {value.tgl_posting.substr(5, 2)}-
                        {value.tgl_posting.substr(0, 4)}
                      </td>
                      <td className="text-center">
                        <Link
                          to={`/kelolaberita/ubahberita/${value.id}`}
                          className="btn btn-outline-primary"
                        >
                          Update
                        </Link>
                      </td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => onDeleteData(value.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>

    // <div className="table-section">
    //   <div className="row mb-4">
    //     <div className="col-md-4">
    //       <Link to="/kelolaberita/inputberita" className="btn btn-primary">
    //         Tambah Berita
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="row">
    //     <div className="col-md-12">
    //       {loading ? (
    //         <LoadingSvg />
    //       ) : (
    //         <table className="table table-bordered">
    //           <thead className="table-secondary">
    //             <tr className="text-center">
    //               <td>No</td>
    //               <td>Judul Berita</td>
    //               <td>Deskripsi</td>
    //               <td>Tanggal Posting</td>
    //               <td className="text-center" colSpan={2}>
    //                 Actions
    //               </td>
    //             </tr>
    //           </thead>

    //           <tbody>
    //             {data?.berita.map((value, valueIdx) => (
    //               <tr key={valueIdx} data-key={value.id}>
    //                 <td className="text-center">{valueIdx + 1}</td>
    //                 <td>{value.judul}</td>
    //                 <td>{value.deskripsi.substr(0, 50)}</td>
    //                 <td>{value.tgl_posting}</td>
    //                 <td className="text-center">
    //                   <Link
    //                     to={`/kelolaberita/ubahberita/${value.id}`}
    //                     className="btn btn-outline-primary"
    //                   >
    //                     Update
    //                   </Link>
    //                 </td>
    //                 <td className="text-center">
    //                   <button
    //                     className="btn btn-outline-danger"
    //                     onClick={() => onDeleteData(value.id)}
    //                   >
    //                     Delete
    //                   </button>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default TableBerita;
