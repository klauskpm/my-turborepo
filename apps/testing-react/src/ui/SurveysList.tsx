import { useGetUnansweredSurveys } from '../data-access/surveys/use-get-unanswered-surveys';
import { SummaryList } from './SummaryList';

export function SurveysList() {
  const { data: surveys } = useGetUnansweredSurveys();

  return (
    <SummaryList title='Latest Surveys' linkTo='/surveys' list={surveys} />
  );
}
