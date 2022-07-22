import { InputText } from '../InputText';
import * as S from './styles';

export const Form = () => {
  return (
    <S.Container>
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
          <label htmlFor="subcategoria">Selecione uma subcategoria do produto</label>
          <select name="categoryTitle" id="subcategoria">
            <option value="Super Ofertas">Super Ofertas</option>
            <option value="Importados">Importados</option>
            <option value="Novidades">Novidades</option>
            <option value="Mundo Saudável">Mundo Saudável</option>
          </select>
        </S.ContainerSelect>
        <InputText
          label="Nome do produto"
          placeholder="e.g Milho verde em conserva"
          nameOfInput="produto"
          idLabel="produto"
        />
      </form>
    </S.Container>
  );
};
