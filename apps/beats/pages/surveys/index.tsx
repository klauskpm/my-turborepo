import React from "react";
import { useRouter } from "next/router";
import { SurveyListPage } from "@survey/feature-reporting";

import { Layout } from '../../components/Layout';

function SurveysPage() {
  const router = useRouter();

  const handleClickItem = (id: number) => {
    router.push(`surveys/${id}`);
  };

  return (
    <Layout>
      <SurveyListPage onClickItem={handleClickItem} />
    </Layout>
  );
}

export default SurveysPage;
