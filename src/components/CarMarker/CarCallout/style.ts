import styled from 'styled-components';

export const CarCalloutContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 250px;
  border-radius: 8px;
  display: flex;
  position: absolute;
  bottom: 50px;
  right: -107.5px;
  
`;

export const CarCalloutArea = styled.div`
  align-items: center;
  background-color: #2d3748;
  padding: 15px;
  border-radius: 8px;
`;

export const CarCalloutText = styled.p`
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 0.85rem;
`;

export const CarCalloutButton = styled.button.attrs({
  activeOpacity: 0.8,
})`
  border: 1px solid #ffc107;
  padding: 8px 24px;
  border-radius: 8px;
  margin-top: 5px;
`;
