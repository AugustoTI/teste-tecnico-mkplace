import Link from 'next/link';
import { BoxIcon } from '../BoxIcon';
import AddListIcon from '../../assets/plus.svg';
import * as S from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Title } from '../Title';

export const LinkCreateList = () => {
  const theme = useContext(ThemeContext);

  return (
    <Link href="/create-list">
      <a>
        <S.Container>
          <BoxIcon
            background={theme.colors.contrast.c4a}
            colorIcon={theme.colors.contrast.c2}
          >
            <AddListIcon />
          </BoxIcon>
          <Title
            as="h2"
            size="small"
            weight={700}
            textColor={theme.colors.contrast.c2}
          >
            Criar uma lista de compras
          </Title>
        </S.Container>
      </a>
    </Link>
  );
};
