import { FiLogIn } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { BsCart2 } from "react-icons/bs";
import { Navbar } from "./styles";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";

const Header = ({ cart }) => {
  const { cart: carr } = useContext(CartContext);
  return (
    <Navbar>
      <h1>
        <ImBooks /> ReaderStore
      </h1>
      <div>
        <button onClick={() => cart("/cart")}>
          <p>{carr.length}</p>
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
