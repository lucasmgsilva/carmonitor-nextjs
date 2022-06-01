import styled from 'styled-components';

interface IconProps {
  size: number;
}

export const IconArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img<IconProps>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`;

export const Triangle = styled.img<IconProps>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`;