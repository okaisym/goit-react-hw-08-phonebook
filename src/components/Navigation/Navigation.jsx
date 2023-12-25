import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavLink>
  );
};

const StyledNavLink = styled(NavLink)`
color: #002244;
font-weight: 700;`