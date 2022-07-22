import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1.2rem;
    border: 1px solid ${theme.colors.base.c4};
    border-radius: 1rem;
    width: 100%;
    max-width: 350px;
  `}
`;
