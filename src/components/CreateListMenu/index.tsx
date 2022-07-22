import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/logo.jpg';
import { Title } from '../Title';
import LeftArrow from '../../assets/left-arrow.svg';
import Link from 'next/link';
import { InfoList } from '../InfoList';
import { Box } from '../Box';
import { Form } from '../Form';

export const CreateListMenu = () => {
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
        <Box>
          <InfoList />
        </Box>
        <Form />
      </S.GridContainer>
    </S.Container>
  );
};
