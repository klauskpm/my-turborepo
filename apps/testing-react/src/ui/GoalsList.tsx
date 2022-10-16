import { SummaryList } from './SummaryList';
import { useLocations } from '../data-access/get-locations';

export function GoalsList() {
  const { loading, error, data } = useLocations();
  const list = [0, 1, 2];

  console.log(loading, error, data);

  return (
    <SummaryList title='Latest Goals' linkTo='/goals' list={list} />
  );
}
