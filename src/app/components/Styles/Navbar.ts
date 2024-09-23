import styled from 'styled-components';

// Navbar container styling
export const NavbarContainer = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999; 
`;

// Logo styling
export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

// Navigation links styling
export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`;

// Each navigation link styling
export const NavLinkItem = styled.li`
  font-size: 18px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: #43c5c3;
    }
  }
`;

// Contact Button styling
export const ContactButton = styled.a`
  background-color: #2D9596;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none; 
  
  &:hover {
    background-color: #0D7C66;
  }
`;
