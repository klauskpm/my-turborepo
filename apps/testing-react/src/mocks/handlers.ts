import { graphql } from 'msw';

import { surveysData } from './surveys-data';
import { goalsData } from './goals-data';

export const handlers = [
  graphql.query('GetSurveys', (req, res, ctx) => {
    return res(ctx.data({ surveys: surveysData}));
  }),

  graphql.query('GetGoals', (req, res, ctx) => {
    return res(ctx.data({ goals: goalsData}));
  })
];
