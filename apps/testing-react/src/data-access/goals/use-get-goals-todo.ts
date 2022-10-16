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

export const GET_GOALS_TODO = gql`
  query GetGoalsTodo {
    goals {
      id
      goals
      done
    }
  }
`;

export function useGetGoalsTodo() {
  const { loading, data, error } = useQuery<GetGoalsData>(GET_GOALS_TODO);
  const goals = useMemo(() => data?.goals ?? [], [data?.goals]);

  return { loading, data: goals, error };
}
