import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    margin: 0 auto;
    max-width: 1200px;
  `}
`;

export const Header = styled.header`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const GridContainer = styled.div`
  ${() => css`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 32rem 1fr;
    align-items: start;
    gap: 2.4rem;
  `}
`;
