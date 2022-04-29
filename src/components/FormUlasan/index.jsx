import React from "react";

const FormUlasan = ({ dataUlasan }) => {
  const items = dataUlasan.ulasan;

  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-7">
            <div className="section-ulasan">
              <form className="row form-ulasan">
                <h4 className="pb-2">Beri Ulasan Mengenai Wisata</h4>
                <hr />
                <div className="col-md-6 mt-4">
                  <input
                    type="text"
                    className="form-control input-ulasan"
                    placeholder="Masukkan Nama"
                    aria-label="Masukkan Nama"
                  />
                </div>

                <div className="col-md-6 mt-4">
                  <input
                    type="text"
                    className="form-control input-ulasan"
                    placeholder="Masukkan Email"
                    aria-label="Masukkan Email"
                  />
                </div>

                <div className="col-12 mt-4">
                  <textarea
                    className="form-control input-ulasan"
                    placeholder="Masukkan Ulasan"
                    aria-label="Masukkan Ulasan"
                    rows={7}
                  />
                </div>

                <div className="col-12 mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit-ulasan"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="list-ulasan">
              <h4>{items.length} Ulasan</h4>
              <hr />

              {dataUlasan?.ulasan.map((value, valueIdx) => (
                <>
                  <h6 key={valueIdx}>{value.nama}</h6>
                  <p>{value.ulasan}</p>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUlasan;
