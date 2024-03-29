import styled from 'styled-components';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';

const DeliverBox = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 768px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 8px;
  }
`;

export const CheckBoxDelivery = () => (
  <DeliverBox>
    <CheckBox name="delivery" label="доставка" theme="ligth" />
  </DeliverBox>
);
