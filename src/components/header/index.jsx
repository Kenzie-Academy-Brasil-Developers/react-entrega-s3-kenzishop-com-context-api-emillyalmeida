import { FiLogIn } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";
import { Navbar } from "./styles";

const Header = ({ cart }) => {
  return (
    <Navbar>
      <h1>
        <ImBooks /> ReaderStore
      </h1>
      <div>
        <button onClick={() => cart("/cart")}>
          <BsCart2 /> <span>Carrinho</span>
        </button>
        <button>
          <FiLogIn /> <span>Entrar</span>
        </button>
      </div>
    </Navbar>
  );
};

export default Header;
