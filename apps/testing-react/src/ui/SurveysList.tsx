import { SummaryList } from './SummaryList';

export function SurveysList() {
  const list = [0, 1, 2];

  return (
    <SummaryList title='Latest Surveys' linkTo='/surveys' list={list} />
  );
}
