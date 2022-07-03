import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 10px 0;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonDelete = styled.button`
  position: relative;

  padding: 0;
  width: 60px;
  height: 25px;
  border: 2px solid #888888;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 8px;
  box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff,
    -20px 0px 52px #ffffff, 2px 3px 6px rgb(0 0 0 / 89%);
  transition: 0.13s ease-in-out;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
