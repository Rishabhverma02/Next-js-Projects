import styled from 'styled-components';

// ButtonWraper which contain your buttons
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px; 
  justify-content: center; 
  align-items: center;
  padding: 20px; 
  flex-wrap: wrap; 
`;

// Redirect Buttons
export const LinkRedirectBtn = styled.a`
  background-color: #43c5c3; 
  color: #fff;
  padding: 12px 24px; 
  font-size: 18px; 
  font-weight: bold;
  border: none; 
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: inline-block;
  letter-spacing: 2px;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #333;
    transition: 0.4s ease;
  }


  &:before {
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }

  &:after {
    bottom: 0;
    right: 0;
    transform: translate(0, 0);
  }

  &:hover:before {
    width: 100%; 
  }

  &:hover:after {
    width: 100%;
  }

  &:hover {
    background-color: #2fa9a6; 
  }
`;



