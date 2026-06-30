import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useEffect } from 'react';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate(RoutePath.main, { state: { from: location }, replace: true });
        }
    }, [auth, navigate, location]);

    return children;
}
