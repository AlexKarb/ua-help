import styled from 'styled-components';
import { BsExclamationTriangle } from 'react-icons/bs';

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 16px;
  color: #ffffff54;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ExclamationPoint = styled(BsExclamationTriangle)`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  color: #ffffff54;
  display: block;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;
