import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </div>
  );
};

const StyledNavLink = styled(NavLink)`
color: #002244;
font-weight: 700;
margin-right: 30px;

&.active {
  color: #6495ed;
}`;