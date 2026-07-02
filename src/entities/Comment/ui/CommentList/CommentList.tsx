import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from 'entities/Comment/model/types/comments';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentCardProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentCardProps) => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            {
                comments?.length ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />))
                    : <Text text={t('Комментарии отсутсвуют')} />
            }
        </div>
    );
};
