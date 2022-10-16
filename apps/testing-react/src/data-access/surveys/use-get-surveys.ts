import { gql, useQuery } from '@apollo/client';

export interface Survey {
  id: number
  title: string
}

export interface GetSurveysData {
  surveys: Survey[]
}

export const GET_SURVEYS = gql`
  query GetSurveys {
    surveys {
      id
      title
    }
  }
`;

export function useGetSurveys() {
  return useQuery<GetSurveysData>(GET_SURVEYS);
}
