import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import IconList from '../../assets/paper.svg';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Title } from '../Title';
import { BoxIcon } from '../BoxIcon';
import { LinkCreateList } from '../LinkCreateList';

export const HomeMenu = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Content>
        <Image src="/logo-mkplace.png" width={278} height={50} alt="MKPLACE" />
        <S.WrapperLinks>
          <Link href={`/list`}>
            <a>
              <S.ContainerLink>
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
          <LinkCreateList />
        </S.WrapperLinks>
      </S.Content>
    </S.Container>
  );
};
