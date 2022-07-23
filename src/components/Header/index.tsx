import Image from 'next/image';
import * as S from './styles';
import logo from '../../assets/logo.jpg';
import { Title } from '../Title';
import { useMedia } from '../../hooks/useMedia';
import LeftArrow from '../../assets/left-arrow.svg';
import Link from 'next/link';

export const Header = () => {
  const mobile = useMedia('(max-width: 800px)');

  return (
    <S.Container>
      {!mobile && <Image src={logo} alt="logo MKPLACE" height={80} width={80} />}
      <Link href="/">
        <a>
          <S.Content>
            <LeftArrow />
            <Title
              as="h1"
              family={mobile ? 'secondary' : 'primary'}
              size={mobile ? 'large' : 'big'}
              weight={mobile ? 700 : 800}
            >
              Criando Lista de Compras
            </Title>
          </S.Content>
        </a>
      </Link>
    </S.Container>
  );
};
