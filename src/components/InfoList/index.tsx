import * as S from './styles';
import { Title } from '../Title';
import { BoxIcon } from '../BoxIcon';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import ListIcon from '../../assets/paper.svg';

export const InfoList = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <BoxIcon background={colors.base.c5a} colorIcon="#4F4F4F">
        <ListIcon />
      </BoxIcon>
      <div>
        <Title as="h2" size="small" weight={700} textColor="#000">
          Lista 56431
        </Title>
        <span>1 categorias / 1 itens</span>
      </div>
    </S.Container>
  );
};
