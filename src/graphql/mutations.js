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
