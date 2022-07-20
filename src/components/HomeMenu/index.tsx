import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import IconAdd from '../../assets/plus.svg';
import IconList from '../../assets/paper.svg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Title } from '../Title';
import { BoxIcon } from '../BoxIcon';

export const HomeMenu = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Content>
        <Image src="/logo-mkplace.png" width={278} height={50} alt="MKPLACE" />
        <S.WrapperLinks>
          <Link href={`/list`}>
            <a>
              <S.ContainerLink borderColor={theme.colors.base.c4}>
                <BoxIcon background={theme.colors.base.c5a} colorIcon={'#4F4F4F'}>
                  <IconList />
                </BoxIcon>
                <div>
                  <Title
                    as="h2"
                    textColor={theme.colors.base.c7}
                    weight={700}
                    size={'small'}
                  >
                    Lista 56431
                  </Title>
                  <S.Text>1 categorias / 1 itens</S.Text>
                </div>
              </S.ContainerLink>
            </a>
          </Link>
          <Link href="/create-list">
            <a>
              <S.ContainerLink borderColor={theme.colors.contrast.c4}>
                <BoxIcon
                  background={theme.colors.contrast.c4a}
                  colorIcon={theme.colors.contrast.c2}
                >
                  <IconAdd />
                </BoxIcon>
                <Title
                  as="h2"
                  weight={700}
                  textColor={theme.colors.contrast.c2}
                  size="small"
                >
                  Criar uma lista de compras
                </Title>
              </S.ContainerLink>
            </a>
          </Link>
        </S.WrapperLinks>
      </S.Content>
    </S.Container>
  );
};
