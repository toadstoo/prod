import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [{
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'vasya' },
    },
    {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'vasya' },
    }],
};

export const isLoading = Template.bind({});
isLoading.args = {
    comments: [],
    isLoading: true,
};
