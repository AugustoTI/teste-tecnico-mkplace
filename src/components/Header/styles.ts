import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const Content = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    gap: 0.8rem;
  `}
`;
