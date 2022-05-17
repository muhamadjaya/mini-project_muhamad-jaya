import React from "react";
import Navbar from "../../components/Navbar";
import FormUlasan from "../../components/FormUlasan";
import ListUlasan from "../../components/ListUlasan";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_BERITA_BY_ID } from "../../graphql/queries";

import { useParams } from "react-router-dom";

const DetailBerita = () => {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_BERITA_BY_ID, {
    variables: { id: id },
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  console.log("ini data berita", data);

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="loading-animation">
          <LoadingSvg />
        </div>
      ) : (
        <>
          {data?.berita.map((value, valueIdx) => (
            <div className="container mt-5 pt-5 mb-5 pb-5" key={valueIdx}>
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="banner-detail-wisata">
                    <img
                      src={value.gambar}
                      className="detail-berita-image"
                      alt="Detail Berita"
                    />
                  </div>

                  <div className="content-utama">
                    <h3 className="head-title-detail-berita">{value.judul}</h3>
                    <h4 className="address-title">
                      Diposting pada tanggal {value.tgl_posting.substr(8, 2)}-
                      {value.tgl_posting.substr(5, 2)}-
                      {value.tgl_posting.substr(0, 4)}
                    </h4>
                    <p className="deskripsi-1">{value.deskripsi}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default DetailBerita;
