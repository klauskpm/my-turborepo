import { SurveyListPage } from "@survey/feature-reporting";
import React from "react";
import { Layout } from '../../components/Layout';

function SurveysPage() {
  const handleClickItem = () => {
    console.log('handle it');
  };

  return (
    <Layout>
      <SurveyListPage onClickItem={handleClickItem} />
    </Layout>
  );
}

export default SurveysPage;
