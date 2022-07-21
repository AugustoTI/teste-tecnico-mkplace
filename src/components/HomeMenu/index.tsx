import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BoxIcon } from '../BoxIcon';
import { LinkCreateList } from '../LinkCreateList';
import { InfoList } from '../InfoList';
import ListIcon from '../../assets/paper.svg';

export const HomeMenu = () => {
  const theme = useContext(ThemeContext);

  return (
    <S.Container>
      <div>
        <Image src="/logo-mkplace.png" width={278} height={50} alt="MKPLACE" />
        <S.ShoppingList>
          <li>
            <Link href={`/list`}>
              <a>
                <S.ContainerLink>
                  <BoxIcon background={theme.colors.base.c5a} colorIcon="#4F4F4F">
                    <ListIcon />
                  </BoxIcon>
                  <InfoList />
                </S.ContainerLink>
              </a>
            </Link>
          </li>
        </S.ShoppingList>
        <LinkCreateList />
      </div>
    </S.Container>
  );
};
