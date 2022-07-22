import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 1rem;
    border: 1px solid ${theme.colors.base.c4};
    padding: 2.4rem;
    max-width: 676px;
    width: 100%;

    form {
      display: grid;
      gap: 1.6rem;
    }
  `}
`;
