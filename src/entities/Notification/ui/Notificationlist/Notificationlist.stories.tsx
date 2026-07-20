import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Notificationlist } from './Notificationlist';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Notification/Notificationlist',
    component: Notificationlist,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof Notificationlist>;

const Template: ComponentStory<typeof Notificationlist> = (args) => <Notificationlist {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

Normal.decorators = [StoreDecorator({})];

Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Спасибо добрый человек',
                },
                {
                    id: '2',
                    title: 'Уведомление',
                    description: 'Спасибо добрый человек',
                },
                {
                    id: '3',
                    title: 'Уведомление',
                    description: 'Спасибо добрый человек',
                },
            ],
        },
    ],
};
