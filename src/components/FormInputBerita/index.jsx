import React, { useState } from "react";
// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTBERITA } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_BERITA } from "../../graphql/mutations";

const FormInputBerita = () => {
  const { data, loading, error, refetch } = useQuery(GET_LISTBERITA);

  const [insertBerita, { loading: loadingInsert }] = useMutation(
    INSERT_BERITA,
    { refetchQueries: [GET_LISTBERITA] }
  );

  const [inputs, setInputs] = useState({
    judul: "",
    deskripsi: "",
    tgl_posting: "",
    gambar: "",
    id_admin: "",
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

  const [listWisata, setListWisata] = useState([]);

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
          judul: inputs.judul,
          deskripsi: inputs.deskripsi,
          tgl_posting: inputs.tgl_posting,
          gambar: baseImage,
          id_admin: 1,
        },
      },
    });

    setInputs({
      judul: "",
      deskripsi: "",
      tgl_posting: "",
      gambar: "",
      id_admin: "",
    });
  };

  return (
    <>
      <h1>Form Input</h1>
      <section className="tambahberita mb-5 pb-5 mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <label
                    htmlFor="input-judul-berita"
                    className="col-sm-2 col-form-label"
                  >
                    Judul Berita
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="judul"
                      className="form-control"
                      id="input-judul-berita"
                      value={inputs.judul}
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
                    htmlFor="input-tgl-posting"
                    className="col-sm-2 col-form-label"
                  >
                    Tanggal Posting
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="date"
                      name="tgl_posting"
                      className="form-control"
                      id="input-tgl-posting"
                      value={inputs.tgl_posting}
                      onChange={(e) =>
                        handleInput(e.target.value, e.target.name)
                      }
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="gambar-berita"
                    className="col-sm-2 col-form-label"
                  >
                    Gambar
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      id="gambar-berita"
                      type="file"
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">
                      Simpan
                    </button>
                    <button type="reset" className="btn btn-danger ms-2">
                      Batal
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-3">
              <h1>Input Berita</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormInputBerita;
