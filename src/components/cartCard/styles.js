import styled from "styled-components";

export const LiCart = styled.li`
  width: 90%;
  height: 200px;
  margin: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  background-color: var(--blue-white);
  border-radius: 5px;
  padding: 8px;

  figure {
    width: 38%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--white);

    img {
      width: 80%;
      height: 90%;
      object-fit: contain;
    }
  }

  section {
    width: 27%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    > h3,
    span {
      color: var(--mostarda);
      text-align: center;
    }
  }

  > div {
    width: 29%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0;

    button {
      border: none;
      border-radius: 5px;
      width: 88%;
      height: 25px;
      background-color: var(--blue-medium);
      color: var(--blue-white);

      &:hover {
        background-color: var(--mostarda);
      }
    }

    span {
      color: var(--blue-dark);
      font-size: 0.7rem;
    }
  }
`;
