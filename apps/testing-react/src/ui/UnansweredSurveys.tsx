import { SummaryList } from './SummaryList';
import { useGetUnansweredSurveys } from '../data-access/surveys/use-get-unanswered-surveys';

export function UnansweredSurveys() {
  const { data: surveys } = useGetUnansweredSurveys();

  return (
    <SummaryList title='Unanswered Surveys' linkTo='/surveys' list={surveys} />
  );
}
