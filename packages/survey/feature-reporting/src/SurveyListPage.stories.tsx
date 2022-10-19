import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SurveyListPage } from './SurveyListPage';

const client = new ApolloClient({
  uri: 'https://localhost:6006/graphql/mocked',
  cache: new InMemoryCache(),
});

export default {
  title: 'Survey/feature-reporting/SurveyListPage',
  component: SurveyListPage,
  decorators: [
    (Story) => {
      return (
        <ApolloProvider client={client}>
          <Story/>
        </ApolloProvider>
      )
    }
  ]
} as ComponentMeta<typeof SurveyListPage>;

const Template: ComponentStory<typeof SurveyListPage> = (args) => <SurveyListPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onClickItem: console.log
}
