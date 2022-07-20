import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const WrapperLinks = styled.div`
  display: grid;
  gap: 1.6rem;
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
