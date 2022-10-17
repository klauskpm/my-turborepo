import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

export interface SurveyWithAnswer {
  id: number
  title: string
  answered: boolean
}

export interface GetUnansweredSurveysData {
  surveys: SurveyWithAnswer[]
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
  const {loading, error, data} = useQuery<GetUnansweredSurveysData>(GET_UNANSWERED_SURVEYS, { fetchPolicy: 'network-only' });
  const surveys: SurveyWithAnswer[] = useMemo(() => data?.surveys || [], [data?.surveys]);

  return { loading, error, data: surveys };
}
