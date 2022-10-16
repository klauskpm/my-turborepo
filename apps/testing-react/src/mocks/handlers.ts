import { graphql } from 'msw';

import { surveysData } from './surveys-data';
import { goalsData } from './goals-data';

export const handlers = [
  graphql.query('GetSurveys', (req, res, ctx) => {
    return res(ctx.data({ surveys: surveysData }));
  }),
  graphql.query('GetUnansweredSurveys', (req, res, ctx) => {
    const surveys = surveysData.filter(((survey) => survey.answered));
    return res(ctx.data({ surveys }));
  }),

  graphql.query('GetGoals', (req, res, ctx) => {
    return res(ctx.data({ goals: goalsData}));
  }),
  graphql.query('GetGoalsTodo', (req, res, ctx) => {
    const goals = goalsData.filter(((goal) => goal.done));
    return res(ctx.data({ goals }));
  })
];
