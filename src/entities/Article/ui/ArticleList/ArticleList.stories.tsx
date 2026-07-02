import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleView } from 'entities/Article/model/types/article';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoadingBig = Template.bind({});
isLoadingBig.args = {
    articles: [],
    isLoading: true,
};

export const isLoadingSmall = Template.bind({});
isLoadingSmall.args = {
    view: ArticleView.SMALL,
    isLoading: true,
};

export const isLoadingBigDark = Template.bind({});
isLoadingBigDark.args = {
    articles: [],
    isLoading: true,
};
isLoadingBigDark.decorators = [ThemeDecorator(Theme.DARK)];
