import { graphql } from 'msw';

import { surveysData, surveyWithResponses } from "./surveys-data";

export const surveysHandlers = [
  graphql.query('GetSurveys', (req, res, ctx) => {
    return res(ctx.data({ surveys: surveysData }));
  }),
  graphql.query('GetUnansweredSurveys', (req, res, ctx) => {
    const surveys = surveysData.filter(((survey) => !survey.answered));
    return res(ctx.data({ surveys }));
  }),
  graphql.query('GetSurveyDetails', (req, res, ctx) => {
    return res(ctx.data({ survey: surveyWithResponses }));
  })
];
