import styled from '@emotion/styled';

export const ButtonSubmit = styled.button`
  position: relative;

  padding: 0;
  width: 200px;
  height: 50px;
  margin-top: 30px;
  border: 2px solid #888888;
  outline: none;
  background-color: #f4f5f6;
  border-radius: 8px;
  box-shadow: -6px -20px 35px #ffffff, -6px -10px 15px #ffffff,
    -20px 0px 30px #ffffff, 6px 20px 25px rgba(0, 0, 0, 0.2);
  transition: 0.13s ease-in-out;
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
`;
