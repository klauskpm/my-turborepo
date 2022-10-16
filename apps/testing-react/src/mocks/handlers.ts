import { graphql } from 'msw';

import { surveysData } from './surveys-data';

export const handlers = [
  graphql.query('GetSurveys', (req, res, ctx) => {
    return res(ctx.data({ surveys: surveysData}));
  })
];
