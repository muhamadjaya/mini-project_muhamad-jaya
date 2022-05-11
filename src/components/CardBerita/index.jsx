import React from "react";

import { Link } from "react-router-dom";
import LoadingSvg from "../LoadingSvg/LoadingSvg";
// Apollo Client
import { useQuery, useLazyQuery } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA } from "../../graphql/queries";

const CardBerita = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  return (
    <div className="list-card-berita">
      <div className="section-section mb-4">
        <div className="row">
          <div className="col-md-3">
            <input
              // onChange={onChangeTitle}
              // value={title}
              autoFocus
              type="text"
              className="form-control searchbyname-input"
            />
          </div>
          <div className="col-md-2">
            <button
              type="submit"
              className="btn btn-primary btn-search"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSvg />
      ) : (
        <>
          {data?.berita.map((value, valueIdx) => (
            <div className="card mb-3 card-berita" key={valueIdx}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={value.gambar}
                    className="img-berita"
                    alt="berita images"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body ">
                    <h5 className="card-title">{value.judul}</h5>
                    <p className="card-text text-justify">{value.deskripsi}</p>
                    <p className="card-text">
                      <small className="text-muted">{value.tgl_posting}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default CardBerita;
