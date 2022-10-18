export const surveysData = [
  { id: 1, title: 'Engagement Survey', answered: true, __typename: 'Survey' },
  { id: 2, title: 'DEI Survey', answered: false, __typename: 'Survey' },
  { id: 3, title: 'Exit Survey', answered: false, __typename: 'Survey' },
  { id: 4, title: 'Onboard Survey', answered: true, __typename: 'Survey' },
];

export const surveyWithResponses = {
  id: 1,
  title: 'Selected Survey',
  responses: [
    { id: 11, questionTitle: 'What?', percentage: 15.12 },
    { id: 12, questionTitle: 'Who?', percentage: 30 },
    { id: 13, questionTitle: 'When?', percentage: 80 },
    { id: 13, questionTitle: 'Which?', percentage: 99.99 },
  ]
};
