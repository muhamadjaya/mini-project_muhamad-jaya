import React from "react";
// Apollo Client
import { useQuery } from "@apollo/client";
// Hasura GraphQL Queries

const Search = () => {
  return (
    <>
      <form className="form-inline mb-5">
        <div className="form-group mr-2">
          <input
            type="text"
            name="keyword"
            size="37"
            autoFocus
            placeholder="Cari Wisata"
            autoComplete="off"
            id="keyword"
          />
        </div>
      </form>
    </>
  );
};

export default Search;
