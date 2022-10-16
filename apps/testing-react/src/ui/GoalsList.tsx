import { SummaryList } from './SummaryList';
import { useGetGoalsTodo } from '../data-access/goals/use-get-goals-todo';

export function GoalsList() {
  const { data: goals } = useGetGoalsTodo();

  return (
    <SummaryList title='Latest Goals' linkTo='/goals' list={goals} />
  );
}
