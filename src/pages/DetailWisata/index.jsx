import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FormUlasan from "../../components/FormUlasan";
import LoadingSvg from "../../components/LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery } from "@apollo/client";
// Hasura GraphQL Queries
import {
  GET_WISATA_BY_ID,
  GET_ULASAN,
  GET_WISATA_AND_ULASAN,
} from "../../graphql/queries";

import { useParams } from "react-router-dom";

const DetailWisata = () => {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery(GET_WISATA_AND_ULASAN, {
    variables: { id: id },
  });

  const {
    data: dataUlasan,
    loading: loadingUlasan,
    error: errorUlasan,
    refetch: refetchUlasan,
  } = useQuery(GET_ULASAN, {
    variables: { id_wisata: 1 },
  });

  console.log("ini data wisata", data);

  return (
    <>
      <Navbar />
      <Hero />

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

                  <div className="main-content">
                    <h3 className="head-title-detail-wisata">
                      {value.nama_wisata}
                    </h3>
                    <h4 className="address-title">{value.alamat}</h4>
                    <p className="deskripsi-1">{value.deskripsi}</p>
                    {/* <p className="deskripsi-2">
                
              </p> */}
                  </div>

                  <div className="section-ulasan">
                    <FormUlasan dataUlasan={data} />
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
