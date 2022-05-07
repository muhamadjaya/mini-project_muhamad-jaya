import { gql } from "@apollo/client";

export const INSERT_WISATA = gql`
  mutation insertWisata($object: wisata_insert_input!) {
    insert_wisata_one(object: $object) {
      id
      nama_wisata
      kategori
      alamat
      deskripsi
      gambar
      id_admin
    }
  }
`;

export const INSERT_ULASAN = gql`
  mutation insertUlasan($object: ulasan_insert_input!) {
    insert_ulasan_one(object: $object) {
      id
      nama
      email
      ulasan
      id_wisata
    }
  }
`;

export const DELETE_WSIATA_BY_ID = gql`
  mutation deleteWisataById($id: Int!) {
    delete_wisata_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_BERITA = gql`
  mutation insertBerita($object: berita_insert_input!) {
    insert_berita_one(object: $object) {
      id
      judul
      deskripsi
      tgl_posting
      gambar
      id_admin
    }
  }
`;

export const DELETE_BERITA_BY_ID = gql`
  mutation deleteBeritaById($id: Int!) {
    delete_berita_by_pk(id: $id) {
      id
    }
  }
`;
