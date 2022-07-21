import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 1.6rem;
`;

export const ShoppingList = styled.ul`
  ${() => css`
    margin-top: 4rem;
    margin-bottom: 1.6rem;
    max-height: 20rem;
    overflow-y: auto;

    li + li {
      margin-top: 1.2rem;
    }
  `}
`;

export const ContainerLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.base.c4};
    padding: 1.2rem;
    position: relative;
  `}
`;
