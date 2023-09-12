import { gql } from "@apollo/client";

export const UPDATE_BIRTHYEAR = gql`
  mutation updateBirthyear($name: String!, $born: Int!) {
    editAuthor(name: $name, setBornTo: $born) {
      name
      born
      bookCount
      id
    }
  }
`;
