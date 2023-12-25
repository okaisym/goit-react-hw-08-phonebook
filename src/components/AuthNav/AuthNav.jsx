import { StyledNavLinkContainer, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledNavLinkContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </StyledNavLinkContainer>
  );
};
