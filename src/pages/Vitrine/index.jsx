import Container from "../../components/container";
import Header from "../../components/header";
import VitrineCard from "../../components/vitrineCard";
import { Ul } from "./styles";

import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { ListProductsContext } from "../../providers/listProducts";
import { CartContext } from "../../providers/cart";
import { NavBack } from "../Carrinho/styles";
import { ColorContext } from "../../providers/color";

const Vitrine = ({ theme }) => {
  const history = useHistory();

  const navgation = (path) => {
    return history.push(path);
  };

  const { listProducts } = useContext(ListProductsContext);

  const { addToCart } = useContext(CartContext);

  const { currentTheme, setCurrentTheme, getOpositeTheme } =
    useContext(ColorContext);

  return (
    <Container>
      <Header cart={navgation} />
      <NavBack>
        <button onClick={() => setCurrentTheme(getOpositeTheme())}>
          {currentTheme === "light" ? <BsMoonFill /> : <FaSun />}
        </button>
      </NavBack>
      <Ul>
        {listProducts &&
          listProducts.map((product) => (
            <VitrineCard key={product.id} product={product} add={addToCart} />
          ))}
      </Ul>
    </Container>
  );
};

export default Vitrine;
