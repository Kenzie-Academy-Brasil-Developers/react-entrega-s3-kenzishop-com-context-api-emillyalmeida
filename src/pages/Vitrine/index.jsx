import Container from "../../components/container";
import Header from "../../components/header";
import VitrineCard from "../../components/vitrineCard";
import { Ul } from "./styles";

import { useHistory } from "react-router-dom";

import { useContext } from "react";
import { ListProductsContext } from "../../providers/listProducts";
import { CartContext } from "../../providers/cart";

const Vitrine = () => {
  const history = useHistory();

  const navgation = (path) => {
    return history.push(path);
  };

  const { listProducts } = useContext(ListProductsContext);

  const { addToCart } = useContext(CartContext);

  return (
    <Container>
      <Header cart={navgation} />
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
