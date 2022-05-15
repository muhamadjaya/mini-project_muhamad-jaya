import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTADMIN } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_ADMIN } from "../../graphql/mutations";

import Swal from "sweetalert2";

// Universal Cookies
import Cookies from "universal-cookie";

const FormInputAdmin = () => {
  const navigate = useNavigate();

  const cookies = new Cookies();

  const cookiesAuth = cookies.get("auth");

  const { data, loading, error, refetch } = useQuery(GET_LISTADMIN);

  const [insertBerita, { loading: loadingInsert }] = useMutation(INSERT_ADMIN, {
    refetchQueries: [GET_LISTADMIN],
    onCompleted: (data) => {
      Swal.fire({
        title: "Sukses!",
        text: "Data Berhasil Disimpan",
        icon: "success",
      });
    },
  });

  const [inputs, setInputs] = useState({
    nama_admin: "",
    username: "",
    password: "",
  });

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    // Kepo isi variable
    console.log(newInputs[key]);

    setInputs(newInputs);

    // Kepo isi variable
    console.log(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    insertBerita({
      variables: {
        object: {
          nama_admin: inputs.nama_admin,
          username: inputs.username,
          password: inputs.password,
        },
      },
    });

    setInputs({
      nama_admin: "",
      username: "",
      password: "",
    });

    navigate("/kelola-admin");
  };

  const handleReset = (e) => {
    e.preventDefault();

    navigate("/kelola-admin");
  };

  return (
    <>
      <section className="tambahberita mb-3 pb-3 mt-3 pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row mb-3">
                  <label
                    htmlFor="input-nama-admin"
                    className="col-sm-2 col-form-label"
                  >
                    Nama Admin
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="nama_admin"
                      className="form-control"
                      id="input-nama-admin"
                      value={inputs.nama_admin}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="input-username"
                    className="col-sm-2 col-form-label"
                  >
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="nama_admin"
                      className="form-control"
                      id="input-username"
                      value={inputs.username}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="input-password"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="input-password"
                      value={inputs.password}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-primary btn-simpan"
                    >
                      Simpan
                    </button>
                    <button
                      type="reset"
                      className="btn btn-danger ms-2 btn-batal"
                    >
                      Batal
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormInputAdmin;
