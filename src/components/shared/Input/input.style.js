import Input from 'components/shared/Input/Input';
import colors from 'style/colors';
import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: ${colors.moderateLimeGreen};
  border: none;
  color: ${colors.white};
  width: 7rem;
  height: 3rem;
  border-radius: 0.3rem;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
`;

export const FormInput = styled(Input)`
  border: none;
  height: 3rem;
`;
