import { ReactNode } from 'react';
import * as S from './styles';

interface ContainerProps {
  children: ReactNode;
}

export const Container = (props: ContainerProps) => {
  return <S.Container {...props} />;
};
