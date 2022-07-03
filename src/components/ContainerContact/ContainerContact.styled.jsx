import styled from '@emotion/styled';

export const ListWraper = styled.ul`
  padding-left: 0;
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
