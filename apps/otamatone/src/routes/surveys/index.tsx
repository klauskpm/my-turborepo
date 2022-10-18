import React from 'react';
import { SurveyListPage } from '@survey/feature-reporting';
import { useNavigate } from "react-router-dom";

export function Surveys() {
  const navigate = useNavigate();

  const handleClickItem = (id: number) => navigate(`${id}`);

  return <SurveyListPage onClickItem={handleClickItem} />;
}
