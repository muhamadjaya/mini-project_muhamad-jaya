import React, { useEffect, useState } from "react";
// Apollo Client
import { useQuery, useMutation } from "@apollo/client";
// Hasura GraphQL Queries
import { GET_LISTWISATA, GET_WISATA_BY_ID } from "../../graphql/queries";
// Hasura GraphQL Mutations
import { INSERT_WISATA } from "../../graphql/mutations";

import LoadingSvg from "../LoadingSvg/LoadingSvg";

import { useParams } from "react-router-dom";

const FormUbahWisata = () => {
  const { id } = useParams();

  const [isEdit, setIsEdit] = useState(false);

  const [isDataReady, setIsDataReady] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_WISATA_BY_ID, {
    variables: { id: id },
  });

  //   const { data, loading, error, refetch } = useQuery(GET_LISTWISATA);

  const [insertWisata, { loading: loadingInsert }] = useMutation(
    INSERT_WISATA,
    { refetchQueries: [GET_LISTWISATA] }
  );

  const [inputs, setInputs] = useState({
    namaWisata: "",
    kategori: "",
    alamat: "",
    deskripsi: "",
    gambar: "",
  });

  const [filledInputs, setFilledInputs] = useState({
    namaWisata: data?.wisata[0].nama_wisata,
    kategori: data?.wisata[0].kategori,
    alamat: data?.wisata[0].alamat,
    deskripsi: data?.wisata[0].deskripsi,
    gambar: data?.wisata[0].gambar,
  });

  const [list, setList] = useState([]);

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

  const [categories, setCategories] = useState([
    "Pilih kategori",
    "Alam",
    "Pantai",
    "Kuliner",
  ]);

  const [initSelectValue, setInitSelectValue] = useState(categories[0]);

  const handleInput = (value, key) => {
    setIsEdit(true);

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
          id_admin: 1,
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
  };

  useEffect(() => {
    console.log(data);
    console.log("ini isEdit", isEdit);
  }, [data, isEdit]);

  useEffect(() => {
    if (!loading && data) {
      setList([...data?.wisata]);
      setIsDataReady(true);
    }
  }, [loading, data]);

  console.log("ini list", list);
  console.log(isDataReady);

  return (
    <>
      <h1>Form Ubah</h1>
      <section className="tambahwisataalamm mb-5 pb-5 mt-5 pt-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8">
              {!isDataReady ? (
                <LoadingSvg />
              ) : (
                <form onSubmit={handleSubmit}>
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
                        value={isEdit ? inputs.namaWisata : list[0].nama_wisata}
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
                        id="kategori-wisata"
                        value={isEdit ? initSelectValue : list[0].kategori}
                        onChange={(e) =>
                          handleInput(e.target.value, e.target.name)
                        }
                      >
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
                        value={isEdit ? inputs.alamat : list[0].alamat}
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
                        value={isEdit ? inputs.deskripsi : list[0].deskripsi}
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
                      Image
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

                  {/* <div className="row mb-3">
                  <label
                    htmlFor="image-wisata"
                    className="col-sm-2 col-form-label"
                  >
                    Preview
                  </label>
                  <div className="col-sm-10">
                    <img src={baseImage} height="200px" alt="img preview" />
                  </div>
                </div> */}

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
              )}
            </div>

            <div className="col-md-3">
              <h1>Ubah Wisata</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormUbahWisata;