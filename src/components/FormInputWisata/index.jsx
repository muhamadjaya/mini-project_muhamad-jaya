import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_WISATA } from "../../graphql/mutations";

import Swal from "sweetalert2";

// Universal Cookies
import Cookies from "universal-cookie";

const FormInputWisata = () => {
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useQuery(GET_LISTWISATA);

  const cookies = new Cookies();

  const cookiesAuth = cookies.get("auth");

  const [insertWisata, { loading: loadingInsert }] = useMutation(
    INSERT_WISATA,
    {
      refetchQueries: [GET_LISTWISATA],
      onCompleted: (data) => {
        Swal.fire({
          title: "Sukses!",
          text: "Data Berhasil Disimpan",
          icon: "success",
        });
      },
    }
  );

  const [inputs, setInputs] = useState({
    namaWisata: "",
    kategori: "",
    alamat: "",
    deskripsi: "",
    gambar: "",
  });

  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const [categories, setCategories] = useState(["Alam", "Pantai", "Kuliner"]);

  const [initSelectValue, setInitSelectValue] = useState(categories[0]);

  const handleInput = (value, key) => {
    const newInputs = { ...inputs };

    newInputs[key] = value;

    // Kepo isi variable
    console.log(newInputs[key]);

    setInitSelectValue(value);

    setInputs(newInputs);

    // Kepo isi variable
    console.log(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    insertWisata({
      variables: {
        object: {
          nama_wisata: inputs.namaWisata,
          kategori: inputs.kategori,
          alamat: inputs.alamat,
          deskripsi: inputs.deskripsi,
          gambar: baseImage,
          id_admin: cookiesAuth.id,
        },
      },
    });

    setInputs({
      namaWisata: "",
      kategori: "",
      alamat: "",
      deskripsi: "",
      gambar: "",
    });

    setBaseImage("");
    navigate("/kelola-wisata");
  };

  const handleReset = (e) => {
    e.preventDefault();

    setBaseImage("");
    navigate("/kelola-wisata");
  };

  return (
    <>
      <section className="tambahwisataalamm mb-3 pb-3 mt-3 pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row mb-3">
                  <label
                    htmlFor="input-nama-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Nama Wisata
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="namaWisata"
                      className="form-control"
                      id="input-nama-wisata"
                      value={inputs.namaWisata}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="kategori-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Kategori
                  </label>
                  <div className="col-sm-10">
                    <select
                      name="kategori"
                      className="form-select"
                      aria-label="Default select kategori wisata"
                      defaultValue=""
                      id="kategori-wisata"
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    >
                      <option value="" hidden>
                        Pilih Kategori
                      </option>
                      {categories.map((dataCategory, dataCategoryIdx) => (
                        <option key={dataCategoryIdx} value={dataCategory}>
                          {dataCategory}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="input-alamat-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Alamat
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="alamat"
                      className="form-control"
                      id="input-alamat-wisata"
                      value={inputs.alamat}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="deskripsi"
                    className="col-sm-2 col-form-label"
                  >
                    Deskripsi
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      name="deskripsi"
                      className="form-control"
                      id="deskripsi"
                      rows="5"
                      value={inputs.deskripsi}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="gambar-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Gambar
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="gambar-wisata"
                      type="file"
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="image-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Preview
                  </label>
                  <div className="col-sm-10">
                    <img
                      src={baseImage}
                      height="300px"
                      width="100%"
                      alt="...."
                      style={{ borderRadius: "15px" }}
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

export default FormInputWisata;
