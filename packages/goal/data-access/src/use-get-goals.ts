import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

export interface Goal {
  id: number
  title: string
  done: boolean
}

export interface GetGoalsData {
  goals: Goal[]
}

export const GET_GOALS = gql`
  query GetGoals {
    goals {
      id
      goals
      done
    }
  }
`;

export function useGetGoals() {
  const { loading, error, data } = useQuery<GetGoalsData>(GET_GOALS);
  const goals: Goal[] = useMemo(() => data?.goals ?? [], [data?.goals]);

  return { loading, error, data: goals }
}
