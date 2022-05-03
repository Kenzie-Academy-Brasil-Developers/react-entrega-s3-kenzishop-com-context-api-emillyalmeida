import styled from "styled-components";

export const NavBack = styled.div`
  width: 100%;
  height: 4%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.header.hover};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${(props) => props.theme.header.color};
    }

    > svg {
      height: 1.3rem;
      width: 1.3rem;
      transform: translate(0, 3px);
    }
  }
  button {
    width: 26px;
    height: 100%;
    background-color: ${(props) => props.theme.button.backgroundColor};
    color: ${(props) => props.theme.button.textColor};
    border: none;
    border-radius: 5px;
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
        color: ${(props) => props.theme.header.hover};
        font-size: 1.5rem;
      }

      p {
        color: ${(props) => props.theme.color};
      }

      button {
        width: 120px;
        height: 30px;
        background-color: ${(props) => props.theme.button.backgroundColor};
        color: ${(props) => props.theme.button.textColor};
        border: none;
        border-radius: 5px;
        font-weight: 700;
      }
    }
  }
  > div {
    background-color: ${(props) => props.theme.card.backgroundColor};
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
      color: ${(props) => props.theme.buttonVitrine.backgroundColor};
      text-align: center;
      font-size: 1.3rem;
    }
    > div {
      width: 80%;
      display: flex;
      justify-content: space-between;

      > span {
        font-size: 1rem;
        color: ${(props) => props.theme.color};
        font-weight: bold;
      }
    }
    > button {
      width: 85%;
      height: 32px;
      background-color: ${(props) => props.theme.button.backgroundColor};
      color: ${(props) => props.theme.button.color};
      border: none;
      border-radius: 5px;
      font-weight: 700;

      &:hover {
        opacity: 0.75;
      }
    }
    .orange {
      background-color: ${(props) => props.theme.buttonVitrine.backgroundColor};

      &:hover {
        opacity: 0.75;
      }
    }
  }
`;
