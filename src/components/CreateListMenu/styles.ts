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

export const ListContainer = styled.aside`
  ${({ theme }) => css`
    max-width: 32rem;
    width: 100%;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.base.c4};
    padding: 1.2rem;
  `}
`;

export const ListContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 1.2rem;
  `}
`;

export const FormContainer = styled.div`
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
