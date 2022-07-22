import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    span {
      margin-top: 0.2rem;
      font-size: ${theme.font.size.xs};
      font-weight: 500;
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.base.c6};
    }
  `}
`;
