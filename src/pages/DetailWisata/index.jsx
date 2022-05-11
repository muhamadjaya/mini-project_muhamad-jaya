import React from "react";
import Navbar from "../../components/Navbar";
import FormUlasan from "../../components/FormUlasan";
import ListUlasan from "../../components/ListUlasan";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_WISATA_AND_ULASAN } from "../../graphql/queries";

import { useParams } from "react-router-dom";

const DetailWisata = () => {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_WISATA_AND_ULASAN, {
    variables: { id: id },
    fetchPolicy: "no-cache",
    nextFetchPolicy: "no-cache",
  });

  console.log("ini data wisata", data);

  return (
    <>
      <Navbar />

      {loading ? (
        <LoadingSvg />
      ) : (
        <>
          {data?.wisata.map((value, valueIdx) => (
            <div className="container mt-5 pt-5" key={valueIdx}>
              <div className="row">
                <div className="col-12 col-lg-12">
                  <div className="banner-detail-wisata">
                    <img
                      src={value.gambar}
                      className="detail-wisata-image"
                      alt="Detail Wisata"
                    />
                  </div>

                  <div className="content-utama">
                    <h3 className="head-title-detail-wisata">
                      {value.nama_wisata}
                    </h3>
                    <h4 className="address-title">{value.alamat}</h4>
                    <p className="deskripsi-1">{value.deskripsi}</p>
                  </div>

                  <div className="section-ulasan">
                    <div className="container">
                      <div className="row justify-content-between">
                        <FormUlasan dataWisata={data} />
                        <ListUlasan dataUlasan={data} />
                      </div>
                    </div>
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

export default DetailWisata;
