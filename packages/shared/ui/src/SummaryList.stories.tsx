import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SummaryList } from './SummaryList';

export default {
  title: 'Shared/ui/SummaryList',
  component: SummaryList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof SummaryList>;

const Template: ComponentStory<typeof SummaryList> = (args) => <SummaryList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'List title',
  list: [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Another Item' },
    { id: 3, title: 'Show this' },
  ],
  linkTo: '#'
}
