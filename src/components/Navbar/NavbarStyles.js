import styled from "styled-components";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  width: 100%;
  height: 6rem;
  z-index: 50;
  position: absolute;
	top: 0;
`;

export const NavContainer = styled(Container)`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const LogoGroup = styled.div`
  display: flex;
  flex-flow: wrap;
  column-gap: 1rem;
  align-items: center;
  z-index: 50;

`;

export const NavBrand = styled.span`
  color: white;
  font-size: 2em;
`;

export const NavLogo = styled.img`
  width: 50px;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: wrap;
  column-gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
    padding-top: 20%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
    z-index: 49;
	}
`;

export const NavItem = styled.li`
  color: white;
  font-size: 1.2em;

  &:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

  @media screen and (max-width: 960px) {
    margin-bottom: 4rem;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  font-size: 1.8em;
  display: none;
  z-index: 50;

  @media screen and (max-width:960px) {
    display: block;
  }
`;
