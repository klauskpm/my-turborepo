import { useMemo } from 'react';
import { gql, useQuery } from '@apollo/client';

export interface GoalTodo {
  id: number
  title: string
  done: boolean
}

export interface GetGoalsTodoData {
  goals: GoalTodo[]
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
  const { loading, data, error } = useQuery<GetGoalsTodoData>(GET_GOALS_TODO);
  const goals: GoalTodo[] = useMemo(() => data?.goals ?? [], [data?.goals]);

  return { loading, data: goals, error };
}
