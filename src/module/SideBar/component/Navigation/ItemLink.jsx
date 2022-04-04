import { IconContainer, Label, LinkMenu } from './Navigation.styled';

export const ItemLink = ({ label, icon, path, onClink }) => {
  return (
    <LinkMenu to={path} onClick={onClink}>
      <IconContainer> {icon}</IconContainer>
      <Label> {label}</Label>
    </LinkMenu>
  );
};
