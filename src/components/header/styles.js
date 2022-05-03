import styled from "styled-components";

export const Navbar = styled.header`
  width: 100vw;
  height: 15%;
  background-color: ${(props) => props.theme.header.backgroundColor};
  color: ${(props) => props.theme.header.color};
  padding: 30px 10px 30px 10px;
  border-bottom: 4px solid ${(props) => props.theme.header.hover};
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-left: 2rem;
    }
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.5rem;

    svg {
      @media (min-width: 768px) {
        width: 3.3rem;
        height: 3.3rem;
      }
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
    }
  }

  div {
    display: flex;
    width: 28%;
    justify-content: space-around;
    height: 100%;
  }
  button {
    position: relative;
    border: none;
    background-color: ${(props) => props.theme.header.backgroundColor};
    display: flex;
    align-items: center;
    height: 100%;
    color: ${(props) => props.theme.header.color};

    &:hover {
      color: ${(props) => props.theme.header.hover};
      font-weight: 700;
    }

    > p {
      position: absolute;
      top: -9px;
      left: 17px;
      width: 22px;
      height: 22px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.header.hover};
      border-radius: 50%;
      font-weight: 700;
      font-size: 0.9rem;
      color: ${(props) => props.theme.header.color};
    }
    svg {
      width: 2rem;
      height: 2rem;
      @media (min-width: 768px) {
        margin-right: 1rem;
      }
    }

    span {
      display: none;
      @media (min-width: 769px) {
        display: inline;
        font-size: 1.3rem;
      }
    }
  }
`;
