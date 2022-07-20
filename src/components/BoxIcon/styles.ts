import styled, { css } from 'styled-components';
import { BoxIconStylesProps } from '.';

export const Container = styled.i<BoxIconStylesProps>`
  ${({ background, colorIcon }) => css`
    display: inline-flex;
    padding: 1.2rem;
    border-radius: 1rem;
    background-color: ${background};

    svg * {
      fill: ${colorIcon};
    }
  `}
`;
