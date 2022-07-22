import { ReactNode } from 'react';
import * as S from './styles';

interface BoxProps {
  children: ReactNode;
}

export const Box = (props: BoxProps) => {
  return <S.Container {...props} />;
};
