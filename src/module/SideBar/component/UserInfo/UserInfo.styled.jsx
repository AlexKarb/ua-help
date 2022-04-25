import styled from 'styled-components';
import { FaUserTie, FaUserNurse } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';

export const Container = styled.div`
  display: flex;
  padding: 25px;
  align-items: center;

  background-color: var(--hover-color-bg);
`;

export const InfoContainer = styled.div``;

export const UserName = styled.p`
  font-weight: 700;
  height: auto;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  margin-bottom: 2px;
`;
export const Role = styled.p`
  font-size: 10px;
  color: #2ccac1;
`;

export const IconAdmin = styled(FaUserTie)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  /* border: 1px solid var(--main-text-color); */
  border-radius: 50%;
  padding: 5px;
  color: white;
  /* color: #939496d9; */
`;

export const IconVolonter = styled(FaUserNurse)`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  margin-bottom: 12px;
  border: 1px solid var(--main-text-color);
  border-radius: 50%;
  padding: 5px;
  color: #939496d9;
`;

export const IconGuest = styled(GrUserExpert)`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  padding: 5px;
  color: white;
`;
