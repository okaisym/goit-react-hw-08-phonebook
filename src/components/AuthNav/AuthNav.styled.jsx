import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const StyledNavLinkContainer = styled.div`
display: flex;
gap: 40px;
`

export const StyledNavLink = styled(NavLink)`
color: #002244;
font-weight: 700;

&.active {
color: #6495ed;
}`;