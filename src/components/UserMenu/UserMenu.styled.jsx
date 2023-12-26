import styled from '@emotion/styled';

export const LogOutBtn = styled.button`
  padding: 0px 15px;
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.5s;
  font-weight: 600;

  &:hover {
    background-color: #3367d6;
    box-shadow: 0 0 10px #fff;
  }
  &:active {
    background-color: #2a56c8;
    box-shadow: 0 0 10px #fff;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const UserItem = styled.h1`
  color: #002244;
`;
