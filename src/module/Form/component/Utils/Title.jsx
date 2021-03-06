import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const Title = ({ text }) => <StyledTitle>{text}</StyledTitle>;
