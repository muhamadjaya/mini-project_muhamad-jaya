import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery, useLazyQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA, GET_WISATA_BY_NAME } from "../../graphql/queries";

const CardWisata = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTWISATA);

  const [getWisata, { data: dataByName, loading: loadingByName }] =
    useLazyQuery(GET_WISATA_BY_NAME, {
      onCompleted: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    });

  const [title, setTitle] = useState("");

  const [isInitialQuery, setInitialQuery] = useState(true);

  const onChangeTitle = (e) => {
    if (e.target) {
      setTitle(e.target.value);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (title === "") {
      setInitialQuery(true);
    } else {
      setInitialQuery(false);
      getWisata({ variables: { nama_wisata: `%${title}%` } });
    }
  };

  useEffect(() => {
    console.log("ini loading", loading);
  }, [loading]);

  useEffect(() => {
    console.log("ini loadingByName", loadingByName);
  }, [loadingByName]);

  useEffect(() => {
    console.log("ini isInitialQuery", isInitialQuery);
  }, [isInitialQuery]);

  return (
    <>
      <div className="section-section mb-5">
        <input
          onChange={onChangeTitle}
          value={title}
          autoFocus
          type="text"
          className="searchbyname-input"
        />
        <button type="submit" className="btn-search" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading || loadingByName ? (
        <LoadingSvg />
      ) : isInitialQuery ? (
        <>
          <div className="row row-cols-1 row-cols-md-3">
            {data?.wisata.map((value, valueIdx) => (
              <div className="col mb-4" key={valueIdx}>
                <div className="card">
                  <img
                    src={value.gambar}
                    className="card-img-top"
                    alt="Wisata Alam"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/wisata/detailwisata/${value.id}`}
                        className="link-title-wisata"
                      >
                        {value.nama_wisata}
                      </Link>
                    </h5>
                    <p className="card-text text-justify">
                      {value.deskripsi.substr(0, 100)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {dataByName?.wisata.length === 0 ? (
            <div>
              <h1>Data Tidak Ditemukan</h1>
            </div>
          ) : (
            <div className="row row-cols-1 row-cols-md-3">
              {dataByName?.wisata.map((value, valueIdx) => (
                <div className="col mb-4" key={valueIdx}>
                  <div className="card">
                    <img
                      src={value.gambar}
                      className="card-img-top"
                      alt="Wisata Alam"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link
                          to={`/wisata/detailwisata/${value.id}`}
                          className="link-title-wisata"
                        >
                          {value.nama_wisata}
                        </Link>
                      </h5>
                      <p className="card-text text-justify">
                        {value.deskripsi.substr(0, 100)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CardWisata;