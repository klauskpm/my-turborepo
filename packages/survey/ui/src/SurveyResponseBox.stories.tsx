import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SurveyResponseBox } from './SurveyResponseBox';

export default {
  title: 'Survey/ui/SurveyResponseBox',
  component: SurveyResponseBox
} as ComponentMeta<typeof SurveyResponseBox>;

const Template: ComponentStory<typeof SurveyResponseBox> = (args) => <SurveyResponseBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  questionTitle: 'What?',
  percentage: 55.43
}
