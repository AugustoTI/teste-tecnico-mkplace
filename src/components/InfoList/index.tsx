import * as S from './styles';
import { Title } from '../Title';

export const InfoList = () => {
  return (
    <div>
      <Title as="h2" size="small" weight={700} textColor="#000">
        Lista 56431
      </Title>
      <S.TextInfo>1 categorias / 1 itens</S.TextInfo>
    </div>
  );
};
