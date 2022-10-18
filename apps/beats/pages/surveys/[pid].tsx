import { useGetSurveyDetails } from '@survey/data-access';
import { SurveyDetailsBox } from '@survey/ui';

import { Layout } from '../../components/Layout';

function SurveyDetailsPage() {
  const params = {};
  const { data: survey } = useGetSurveyDetails(Number(params.pid));

  if (!survey) return <div>Empty data</div>;

  return (
    <Layout>
      <SurveyDetailsBox title={survey.title} responses={survey.responses} />
    </Layout>
  )
}

export default SurveyDetailsPage;
