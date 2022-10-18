import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

export interface SurveyResponse {
  id: number
  percentage: number
  questionTitle: string
}

export interface SurveyWithDetails {
  id: number
  title: string
  responses: SurveyResponse[]
}

export interface GetSurveysWithDetailsData {
  survey: SurveyWithDetails
}

export const GET_SURVEY_DETAILS = gql`
  query GetSurveyDetails($surveyId: Int!) {
    survey(id: $surveyId) {
      id
      title
      responses {
        id
        questionTitle
        percentage
      }
    }
  }
`;

export function useGetSurveyDetails(surveyId: number) {
  const { loading, error, data } = useQuery<GetSurveysWithDetailsData>(
    GET_SURVEY_DETAILS,
    { variables: { surveyId }, fetchPolicy: 'network-only' }
  );
  const survey: SurveyWithDetails | undefined = useMemo(() => data?.survey, [data?.survey]);

  return { loading, error, data: survey };
}
