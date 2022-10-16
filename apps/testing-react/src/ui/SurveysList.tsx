import { SummaryList } from './SummaryList';
import { useGetUnansweredSurveys } from '../data-access/surveys/use-get-unanswered-surveys';

export function SurveysList() {
  const { data: surveys } = useGetUnansweredSurveys();

  return (
    <SummaryList title='Latest Surveys' linkTo='/surveys' list={surveys} />
  );
}
