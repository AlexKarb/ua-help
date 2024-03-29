import { Button as MainButton } from 'module/Utils/Button/Button';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0px;
  }
`;

export const Button = ({ text, onClick }) => (
  <ButtonContainer>
    <MainButton type="submit" text={text} onClick={onClick} />
  </ButtonContainer>
);
