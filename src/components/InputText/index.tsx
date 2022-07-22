import * as S from './styles';

interface InputTextProps {
  label: string;
  nameOfInput: string;
  idLabel: string;
  placeholder?: string;
}

export const InputText = ({ label, placeholder, idLabel }: InputTextProps) => {
  return (
    <S.Container>
      <label htmlFor={idLabel}>{label}</label>
      <input id={idLabel} placeholder={placeholder} type="text" />
    </S.Container>
  );
};
