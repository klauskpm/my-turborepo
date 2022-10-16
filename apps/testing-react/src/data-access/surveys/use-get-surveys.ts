import { useMemo } from 'react';
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
  const { loading, error, data } = useQuery<GetSurveysData>(GET_SURVEYS);
  const surveys = useMemo(() => data?.surveys ?? [], [data?.surveys]);

  return { loading, error, data: surveys };
}
