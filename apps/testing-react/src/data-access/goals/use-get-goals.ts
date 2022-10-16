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
  return useQuery<GetGoalsData>(GET_GOALS);
}
