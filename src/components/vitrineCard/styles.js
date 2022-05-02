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
  background-color: var(--blue-white);
  border-radius: 5px;
  padding: 8px;

  div {
    width: 160px;
    height: 155px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: var(--white);

    img {
      width: 130px;
      height: 145px;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 1.3rem;
    color: var(--blue-medium);
  }

  span {
    color: var(--blue-dark);
    width: 78%;
    text-align: left;
  }

  button {
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 30px;
    background-color: var(--mostarda);
    color: var(--blue-white);

    &:hover {
      background-color: var(--blue-medium);
    }
  }
`;
