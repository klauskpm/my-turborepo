import { gql, useQuery } from "@apollo/client";

export const GET_LOCATIONS = gql`
    query GetLocations {
        locations {
            id
            name
            description
            photo
        }
    }
`;

export function useLocations() {
  return useQuery(GET_LOCATIONS);
}
