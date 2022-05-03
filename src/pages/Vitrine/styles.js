import styled from "styled-components";

export const Ul = styled.ul`
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  overflow: scroll;
  @media (min-width: 768px) {
    width: 80%;
    height: 80%;
  }
`;
