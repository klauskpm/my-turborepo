import { SummaryList } from '@shared/ui';
import { useGetGoalsTodo } from '../data-access/goals/use-get-goals-todo';

export function GoalsTodo() {
  const { data: goals } = useGetGoalsTodo();

  return (
    <SummaryList title='Goals Todo' linkTo='/goals' list={goals} />
  );
}
