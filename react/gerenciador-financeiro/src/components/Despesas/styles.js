import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  h1 {
    text-align: left;
    margin-left: 8vh;
    font-size: 1.3rem;
  }
`;

export const Center = styled.div`
  width: 95%;
  margin: 0 auto;

  > div {
    > div {
      > div {
        margin-top: 10px;
      }
    }
  }
`;
