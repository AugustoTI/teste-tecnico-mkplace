import styled, { css } from 'styled-components';

interface BoxIconProps {
  colorIcon?: string;
  backgroundBox?: string;
}

interface Box {
  borderColor?: string;
}

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.size.xs};
    color: #5d5d5b;
    font-family: ${theme.font.family.primary};
    font-weight: 500;
  `}
`;

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

export const BoxIcon = styled.i<BoxIconProps>`
  ${({ colorIcon = '#fff', backgroundBox = '#000' }) => css`
    display: inline-flex;
    padding: 1.2rem;
    border-radius: 1rem;
    background-color: ${backgroundBox};

    svg * {
      fill: ${colorIcon};
    }
  `}
`;

export const ContainerLink = styled.div<Box>`
  ${({ theme, borderColor = '#000' }) => css`
    display: flex;
    gap: 1.2rem;
    align-items: center;
    border-radius: 1rem;
    border: 1px solid ${borderColor};
    padding: 1.2rem;
    position: relative;
  `}
`;
