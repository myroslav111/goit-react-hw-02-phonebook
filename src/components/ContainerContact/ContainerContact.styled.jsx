import styled from '@emotion/styled';

export const ListWraper = styled.ul`
  padding-left: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 390px;
  @media screen and (max-width: 500px) {
    & {
      width: 330px;
    }
  }
`;

export const BoxList = styled.div`
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
  padding: 5px;
`;
