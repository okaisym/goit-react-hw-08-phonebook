import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { LogOutBtn, UserContainer, UserItem } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <UserItem>Hello, {user.name}!</UserItem>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </UserContainer>
  );
};