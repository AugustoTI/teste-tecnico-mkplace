import { useEffect, useState } from 'react';
import { Category } from '../../@types/category';
import { InputSelect } from '../InputSelect';
import { InputText } from '../InputText';
import * as S from './styles';

export const Form = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('http://localhost:3000/api/category');
      const json = await response.json();
      setCategories(json);
    };
    request();
  }, []);

  return (
    <S.Container>
      <form>
        <InputSelect
          options={categories}
          label="Selecione categoria do produto"
          idLabel="categoria"
          nameOfInput="categoria"
        />
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
