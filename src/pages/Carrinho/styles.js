import styled from "styled-components";

export const NavBack = styled.div`
  width: 100%;
  height: 3%;
  margin-left: 5%;
  display: flex;
  align-items: center;

  a {
    color: var(--mostarda);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: var(--blue-dark);
    }

    > svg {
      height: 1.3rem;
      width: 1.3rem;
      transform: translate(0, 3px);
    }
  }
`;
export const Main = styled.main`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }

  ul {
    width: 100%;
    height: 62%;
    box-sizing: border-box;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    overflow-y: scroll;
    @media (min-width: 768px) {
      width: 60%;
      height: 100%;
    }

    > div {
      width: 90%;
      height: 200px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      h2 {
        color: var(--mostarda);
        font-size: 1.5rem;
      }

      button {
        width: 120px;
        height: 30px;
        background-color: var(--blue-dark);
        color: var(--blue-white);
        border: none;
        border-radius: 5px;
        font-weight: 700;
      }
    }
  }
  > div {
    background-color: var(--blue-white);
    width: 90%;
    height: 35%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 768px) {
      padding: 5px;
      width: 32%;
      height: 39%;
    }

    > h3 {
      color: var(--blue-medium);
      text-align: center;
      font-size: 1.3rem;
    }
    > div {
      width: 80%;
      display: flex;
      justify-content: space-between;

      > span {
        font-size: 1rem;
        color: var(--blue-dark);
        font-weight: bold;
      }
    }
    > button {
      width: 85%;
      height: 32px;
      background-color: var(--blue-dark);
      color: var(--blue-white);
      border: none;
      border-radius: 5px;
      font-weight: 700;

      &:hover {
        background-color: var(--blue-medium);
      }
    }
    .orange {
      background-color: var(--mostarda);

      &:hover {
        background-color: var(--blue-dark);
      }
    }
  }
`;
