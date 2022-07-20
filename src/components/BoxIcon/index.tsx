import { ReactNode } from 'react';
import * as S from './styles';

export interface BoxIconStylesProps {
  background?: string;
  colorIcon?: string;
}

interface BoxIconProps extends BoxIconStylesProps {
  children: ReactNode;
}

export const BoxIcon = ({ children, background, colorIcon }: BoxIconProps) => {
  return (
    <S.Container background={background} colorIcon={colorIcon}>
      {children}
    </S.Container>
  );
};
