import { SummaryList } from '@shared/ui';
import { useGetGoalsTodo } from '@goal/data-access';

export function GoalsTodo() {
  const { data: goals } = useGetGoalsTodo();

  return (
    <SummaryList title='Goals Todo' linkTo='/goals' list={goals} />
  );
}
