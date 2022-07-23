import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    margin: 0 auto;
    max-width: 1200px;
  `}
`;

export const GridContainer = styled.div`
  ${() => css`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 32rem 1fr;
    align-items: start;
    gap: 2.4rem;

    @media (max-width: 800px) {
      margin-top: 2.4rem;
      grid-template-columns: 1fr;
    }
  `}
`;
