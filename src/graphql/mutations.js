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
