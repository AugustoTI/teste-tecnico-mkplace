import { Category } from '../../@types/category';
import { SubCategory } from '../../@types/subCategory';
import * as S from './styles';

interface InputSelectProps {
  label: string;
  nameOfInput: string;
  idLabel: string;
  options: (Category | SubCategory)[];
}

export const InputSelect = ({
  idLabel,
  label,
  nameOfInput,
  options,
}: InputSelectProps) => {
  return (
    <S.Container>
      <label htmlFor={idLabel}>{label}</label>
      <select name={nameOfInput} id={idLabel}>
        {options.map(({ id, title }) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </S.Container>
  );
};
