import Container from "../../components/container";
import Header from "../../components/header";
import CartCard from "../../components/cartCard";
import { Main, NavBack } from "./styles";
import { AiOutlineRollback } from "react-icons/ai";

import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ColorContext } from "../../providers/color";

const Carrinho = ({ theme }) => {
  const history = useHistory();

  const navgation = (path) => {
    return history.push(path);
  };

  const { removeAll, removeCart, cart } = useContext(CartContext);

  const { currentTheme, setCurrentTheme, getOpositeTheme } =
    useContext(ColorContext);

  return (
    <Container>
      <Header cart={navgation} />
      <NavBack>
        <Link to="/">
          <AiOutlineRollback /> Store
        </Link>
        <button onClick={() => setCurrentTheme(getOpositeTheme())}>
          {currentTheme === "light" ? <BsMoonFill /> : <FaSun />}
        </button>
      </NavBack>
      <Main>
        <ul>
          {cart && cart < 1 ? (
            <div>
              <h2>O carrinho está vazio</h2>
              <p>Clique em voltar para ir para loja</p>
              <button onClick={() => navgation("/")}>Voltar</button>
            </div>
          ) : (
            cart.map((product, index) => (
              <CartCard key={index} product={product} remove={removeCart} />
            ))
          )}
        </ul>
        <div>
          <h3>Resumo do Pedido</h3>
          <div>
            <span>{cart.length} Produtos</span>
            <span>
              R$:
              {cart
                .reduce((sum, curr) => curr.price * curr.qtd + sum, 0)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </div>
          <button className="orange">Finalizar pedido</button>
          <button onClick={() => removeAll()}>Remover Todos</button>
        </div>
      </Main>
    </Container>
  );
};

export default Carrinho;
