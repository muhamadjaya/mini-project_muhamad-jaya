import React from "react";
import { Link } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { DELETE_WSIATA_BY_ID } from "../../graphql/mutations";

import LoadingSvg from "../LoadingSvg/LoadingSvg";

const Table = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTWISATA);

  const [deleteWisata, { loading: loadingDelete }] = useMutation(
    DELETE_WSIATA_BY_ID,
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
    deleteWisata({
      variables: {
        id: idx,
      },
    });
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col-md-12">
          <div className="row mb-4">
            <div className="col-md-4">
              <Link to="/kelolawisata/inputwisata" className="btn btn-primary">
                Tambah Wisata
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {loading ? (
                <LoadingSvg />
              ) : (
                <table className="table table-bordered">
                  <thead className="table-secondary">
                    <tr className="text-center">
                      <td>No</td>
                      <td>Nama Wisata</td>
                      <td>Kategori</td>
                      <td>Alamat</td>
                      <td>Deskripsi</td>
                      <td className="text-center" colSpan={2}>
                        Actions
                      </td>
                    </tr>
                  </thead>

                  <tbody>
                    {data?.wisata.map((value, valueIdx) => (
                      <tr key={valueIdx} data-key={value.id}>
                        <td className="text-center">{valueIdx + 1}</td>
                        <td>{value.nama_wisata}</td>
                        <td className="text-center">{value.kategori}</td>
                        <td>{value.alamat}</td>
                        <td>{value.deskripsi.substr(0, 50)}</td>
                        <td className="text-center">
                          <Link
                            to={`/kelolawisata/ubahwisata/${value.id}`}
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
      </div>
    </div>
  );
};

export default Table;
