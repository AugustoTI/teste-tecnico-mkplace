import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.primary};
      font-weight: 500;
    }

    input {
      font-size: ${theme.font.size.s};
      font-family: ${theme.font.family.secondary};
      font-weight: 400;
      margin-top: 0.5rem;
      display: block;
      padding: 1.2rem 2rem;
      width: 100%;
      border: 1px solid ${theme.colors.base.c5a};
      border-radius: 0.8rem;

      &::placeholder {
        color: ${theme.colors.base.c6};
      }
    }
  `}
`;
