import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { getArticles } from '../../model/slices/articlesPageSlice';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = ({ className }: ArticleInfiniteListProps) => {
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text text={t('Ошибка при загруке статей')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
};
