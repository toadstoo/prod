import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: '123',
    items: [
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: '123',
    direction: 'top left',
    items: [
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: '123',
    direction: 'top right',
    items: [
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: '123',
    direction: 'bottom left',
    items: [
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: '123',
    direction: 'bottom right',
    items: [
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
        { content: '123123123', value: '123' },
    ],
};
