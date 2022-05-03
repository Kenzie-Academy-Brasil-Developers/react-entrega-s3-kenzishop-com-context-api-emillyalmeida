import styled from "styled-components";

export const Li = styled.li`
  width: 220px;
  height: 270px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: ${(props) => props.theme.card.backgroundColor};
  border-radius: 5px;
  padding: 8px;

  div {
    width: 160px;
    height: 155px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #fff;

    img {
      width: 130px;
      height: 145px;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 1.3rem;
    color: ${(props) => props.theme.color};
  }

  span {
    color: var ${(props) => props.theme.color};
    width: 78%;
    text-align: left;
  }

  button {
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 30px;
    background-color: ${(props) => props.theme.buttonVitrine.backgroundColor};
    color: ${(props) => props.theme.buttonVitrine.color};

    &:hover {
      background-color: ${(props) => props.theme.buttonVitrine.hover};
    }
  }
`;
