import { SummaryList } from './SummaryList';
import { useGetUnansweredSurveys } from '@survey/data-access';

export function UnansweredSurveys() {
  const { data: surveys } = useGetUnansweredSurveys();

  return (
    <SummaryList title='Unanswered Surveys' linkTo='/surveys' list={surveys} />
  );
}
