import Image from 'next/image';
import Link from 'next/link';
import * as S from './styles';
import { LinkCreateList } from '../LinkCreateList';
import { InfoList } from '../InfoList';
import { Box } from '../Box';

export const HomeMenu = () => {
  return (
    <S.Container>
      <div>
        <Image src="/logo-mkplace.png" width={278} height={50} alt="MKPLACE" />
        <S.ShoppingList>
          <li>
            <Link href={`/list`}>
              <a>
                <Box>
                  <InfoList />
                </Box>
              </a>
            </Link>
          </li>
        </S.ShoppingList>
        <LinkCreateList />
      </div>
    </S.Container>
  );
};
