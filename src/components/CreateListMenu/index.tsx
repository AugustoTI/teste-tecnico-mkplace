import * as S from './styles';
import { InfoList } from '../InfoList';
import { Box } from '../Box';
import { Form } from '../Form';
import { Header } from '../Header';

export const CreateListMenu = () => {
  return (
    <S.Container>
      <Header />
      <S.GridContainer>
        <Box>
          <InfoList />
        </Box>
        <Form />
      </S.GridContainer>
    </S.Container>
  );
};
