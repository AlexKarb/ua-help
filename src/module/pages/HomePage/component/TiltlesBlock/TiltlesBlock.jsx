import { Heart, SubTitle, Title, WrapTitle } from './TiltlesBlock.styled';

export const TitleBlock = () => (
  <WrapTitle>
    <Title>Дякуємо Богу за новий день!</Title>
    <SubTitle>
      Працюємо для людей
      <Heart />
    </SubTitle>
  </WrapTitle>
);
