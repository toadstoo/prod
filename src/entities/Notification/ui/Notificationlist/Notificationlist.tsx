import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { useNotifications } from '../../api/notificationApi';
import cls from './Notificationlist.module.scss';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationlistProps {
    className?: string;

}

export const Notificationlist = ({ className }: NotificationlistProps) => {
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 10000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="16"
                max
                className={classNames(cls.Notificationlist, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.Notificationlist, {}, [className])}
        >
            {data?.map((item) => (<NotificationItem key={item.id} item={item} />))}
        </VStack>
    );
};
