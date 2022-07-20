import styled, { css, DefaultTheme } from 'styled-components';
import { TitleStyledProps } from '.';

const fontSizes = {
  big(theme: DefaultTheme) {
    return css`
      font-size: ${theme.font.size.xl};
    `;
  },
  large(theme: DefaultTheme) {
    return css`
      font-size: ${theme.font.size.l};
    `;
  },
  medium(theme: DefaultTheme) {
    return css`
      font-size: ${theme.font.size.m};
    `;
  },
  small(theme: DefaultTheme) {
    return css`
      font-size: ${theme.font.size.s};
    `;
  },
};

export const Title = styled.h1<TitleStyledProps>`
  ${({
    theme,
    family = 'primary',
    size = 'big',
    weight,
    lineHeight,
    textColor,
  }) => css`
    color: ${textColor};
    font-family: ${theme.font.family[family]};
    font-weight: ${weight};
    line-height: ${lineHeight};
    ${fontSizes[size](theme)}
  `}
`;
