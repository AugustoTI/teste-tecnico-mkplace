import { ReactNode } from 'react';
import * as S from './styles';

export interface TitleStyledProps {
  family?: 'primary' | 'secondary';
  size?: 'big' | 'large' | 'medium' | 'small';
  weight?: number;
  lineHeight?: number | string;
  textColor?: string;
}

interface TitleProps extends TitleStyledProps {
  children: ReactNode;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({
  children,
  as = 'h1',
  family = 'primary',
  size = 'big',
  lineHeight = 'initial',
  textColor = '#000',
  weight = 400,
}: TitleProps) => {
  return (
    <S.Title
      as={as}
      family={family}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      textColor={textColor}
    >
      {children}
    </S.Title>
  );
};
