import { gql } from "@apollo/client";

export const GET_NEW_WISATA = gql`
  subscription getNewWisata {
    wisata(limit: 3, order_by: { id: desc }) {
      id
      nama_wisata
      kategori
      alamat
      deskripsi
      gambar
    }
  }
`;

export const GET_NEW_BERITA = gql`
  subscription getNewBerita {
    berita(order_by: { id: desc }) {
      id
      judul
      tgl_posting
      gambar
      deskripsi
    }
  }
`;
