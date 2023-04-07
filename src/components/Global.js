import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  color: #FF8F3D;
  border: solid #FF8F3D;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 0.3rem 1.25rem;
  cursor: pointer;
`;

export const TopRightButton = styled(Button)`
   top: 1.25rem; 
   right: 0.25rem;
`;

export const BottomCenterButton = styled(Button)`
  background-color: transparent;
`;

export const Logo = styled.img`
  width: 10vh;
  margin-right: 1rem;
`;

export const TopLeftLogo = styled(Logo)`
   top: 1.25rem; 
   left: 0.25rem;
`;

export const BottomLeftLogo = styled(Logo)`
  margin-top: 0;
`;