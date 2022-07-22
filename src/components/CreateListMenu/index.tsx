import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/logo.jpg';
import { Title } from '../Title';
import LeftArrow from '../../assets/left-arrow.svg';
import ListIcon from '../../assets/paper.svg';
import Link from 'next/link';
import { BoxIcon } from '../BoxIcon';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { InfoList } from '../InfoList';

export const CreateListMenu = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Header>
        <Image src={logo} alt="logo MKPLACE" height={80} width={80} />
        <Link href="/">
          <a>
            <S.HeaderContent>
              <LeftArrow />
              <Title as="h1" weight={800}>
                Criando Lista de Compras
              </Title>
            </S.HeaderContent>
          </a>
        </Link>
      </S.Header>
      <S.GridContainer>
        <S.ListContainer>
          <S.ListContent>
            <BoxIcon background={colors.base.c5a} colorIcon="#4F4F4F">
              <ListIcon />
            </BoxIcon>
            <InfoList />
          </S.ListContent>
        </S.ListContainer>
        <S.FormContainer>
          <form>
            <S.ContainerSelect>
              <label htmlFor="categoria">Selecione categoria do produto</label>
              <select name="categoryTitle" id="categoria">
                <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                <option value="Especiais">Especiais</option>
                <option value="Nutrição Especial">Nutrição Especial</option>
                <option value="Conteúdo Especial">Conteúdo Especial</option>
              </select>
            </S.ContainerSelect>
            <S.ContainerSelect>
              <label htmlFor="subcategoria">
                Selecione uma subcategoria do produto
              </label>
              <select name="categoryTitle" id="subcategoria">
                <option value="Super Ofertas">Super Ofertas</option>
                <option value="Importados">Importados</option>
                <option value="Novidades">Novidades</option>
                <option value="Mundo Saudável">Mundo Saudável</option>
              </select>
            </S.ContainerSelect>
            <S.ContainerInput>
              <label htmlFor="categoria">Nome do produto</label>
              <input
                id="categoria"
                placeholder="e.g Milho verde em conserva"
                type=""
              />
            </S.ContainerInput>
          </form>
        </S.FormContainer>
      </S.GridContainer>
    </S.Container>
  );
};
