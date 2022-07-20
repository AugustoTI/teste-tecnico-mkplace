import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.contrast.c4};
    background-color: ${theme.colors.base.c3a};
    padding: 1.2rem;
  `}
`;
