import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TodoList from './TodoList';

export default {
  title: 'Components/TodoList',
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Default = Template.bind({});
Default.args = {};