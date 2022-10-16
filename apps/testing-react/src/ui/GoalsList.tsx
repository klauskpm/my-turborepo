import { SummaryList } from './SummaryList';

export function GoalsList() {
  const list = [0, 1, 2];

  return (
    <SummaryList title='Your Goals' linkTo='/goals' list={list} />
  );
}
