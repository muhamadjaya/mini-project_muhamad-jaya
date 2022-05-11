import React from "react";
import { Link } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { DELETE_WSIATA_BY_ID } from "../../graphql/mutations";

import LoadingSvg from "../LoadingSvg/LoadingSvg";

const TableWisata = () => {
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
    <section className="recent">
      <div className="activity-grid">
        <div className="activity-card">
          {/* <h3>Kelola Data Wisata</h3> */}
          <Link
            to="/kelolawisata/inputwisata"
            className="btn btn-primary my-2 ms-2"
          >
            Tambah Wisata
          </Link>
          <div className="table-responsive">
            {loading ? (
              <LoadingSvg />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Wisata</th>
                    <th>Kategori</th>
                    <th>Alamat</th>
                    <th>Deskripsi</th>
                    <th className="text-center" colSpan={2}>
                      Actions
                    </th>
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
    </section>
  );
};

export default TableWisata;
