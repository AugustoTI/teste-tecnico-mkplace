import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: 1rem;
    border: 1px solid ${theme.colors.base.c4};
    padding: 2.4rem;
    max-width: 676px;
    width: 100%;
  `}
`;

export const ContainerInput = styled.div`
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
    }

    input::placeholder {
      color: ${theme.colors.base.c6};
    }
  `}
`;

export const ContainerSelect = styled.div`
  ${({ theme }) => css`
    label {
      font-size: ${theme.font.size.xs};
      font-family: ${theme.font.family.primary};
      font-weight: 500;
    }

    select {
      font-size: ${theme.font.size.s};
      font-family: ${theme.font.family.secondary};
      font-weight: 400;

      margin-top: 0.5rem;
      display: block;
      padding: 1.2rem 2rem;
      width: 100%;
      border: 1px solid ${theme.colors.base.c5a};
      border-radius: 0.8rem;
    }
  `}
`;
