import { graphql } from 'msw';

import { goalsData } from './goals-data';

export const goalsHandlers = [
  graphql.query('GetGoals', (req, res, ctx) => {
    return res(ctx.data({ goals: goalsData}));
  }),
  graphql.query('GetGoalsTodo', (req, res, ctx) => {
    const goals = goalsData.filter(((goal) => goal.done));
    return res(ctx.data({ goals }));
  })
];
