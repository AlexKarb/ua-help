import styled from 'styled-components';

export const Info = styled.div`
  z-index: 3;
  display: none;
  position: absolute;
  left: -27px;
  bottom: -38px;
  width: 80px;
  padding: 5px;
  box-shadow: -1px 0px 5px #1a225780;
  font-size: 10px;
  border-radius: 5px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    left: -26px;
    bottom: -65px;
    width: 100px;
    padding: 5px;
    font-size: 13px;
  }
`;

export const Container = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--unactive-color-bg);
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover > ${Info} {
    display: block;
  }
`;
