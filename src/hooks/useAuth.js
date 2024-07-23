import { useSelector } from 'react-redux';
import * as auth from '../store/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(auth.isLoggedIn);
  const isRefreshing = useSelector(auth.isRefreshing);
  const user = useSelector(auth.user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
