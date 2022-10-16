import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

export interface Survey {
  id: number
  title: string
  answered: boolean
}

export interface GetSurveysData {
  surveys: Survey[]
}

export const GET_UNANSWERED_SURVEYS = gql`
  query GetUnansweredSurveys {
    surveys {
      id
      title
      answered
    }
  }
`;

export function useGetUnansweredSurveys() {
  const {loading, error, data} = useQuery<GetSurveysData>(GET_UNANSWERED_SURVEYS, { fetchPolicy: 'network-only' });
  const surveys: Survey[] = useMemo(() => data?.surveys || [], [data?.surveys]);

  return { loading, error, data: surveys };
}
