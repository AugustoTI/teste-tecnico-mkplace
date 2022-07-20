import styled, { css } from 'styled-components';

export const TextInfo = styled.span`
  ${({ theme }) => css`
    margin-top: 0.2rem;
    font-size: ${theme.font.size.xs};
    font-weight: 500;
    font-family: ${theme.font.family.primary};
    color: ${theme.colors.base.c6};
  `}
`;
