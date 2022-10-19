import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SurveyDetailsBox } from './SurveyDetailsBox';

export default {
  title: 'Survey/ui/SurveyDetailsBox',
  component: SurveyDetailsBox
} as ComponentMeta<typeof SurveyDetailsBox>;

const Template: ComponentStory<typeof SurveyDetailsBox> = (args) => <SurveyDetailsBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'My Survey',
  responses: [
    { questionTitle: 'What?', percentage: 55.43 }
  ]
}
