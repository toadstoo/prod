import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { HStack } from '@/shared/ui/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import {
    getRouteArticleDetails,
    getRouteArticles,
} from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = ({
    className,
}: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleDetails(article.id));
        }
    }, [navigate, article]);

    return (
        <HStack
            max
            justify="between"
            className={classNames('', {}, [className])}
        >
            <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                {t('Назад к списку')}
            </Button>
            {canEdit && (
                <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                    {t('Редактировать')}
                </Button>
            )}
        </HStack>
    );
};
