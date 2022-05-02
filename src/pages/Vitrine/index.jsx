import Container from "../../components/container";
import Header from "../../components/header";
import VitrineCard from "../../components/vitrineCard";
import { Ul } from "./styles";
// import { useSelector, useDispatch } from "react-redux";
// import { addCartThunk } from "../../store/modules/cart/thunk";
import { useHistory } from "react-router-dom";

const Vitrine = () => {
  const history = useHistory();

  const navgation = (path) => {
    return history.push(path);
  };
  // const listProducts = useSelector(({ products }) => products);

  // const dispatch = useDispatch();

  // const handleClick = (id) => dispatch(addCartThunk(id));

  return (
    <Container>
      <Header cart={navgation} />
      <Ul>
        {/* {listProducts &&
          listProducts.map((product) => (
            <VitrineCard key={product.id} product={product} add={handleClick} />
          ))} */}
      </Ul>
    </Container>
  );
};

export default Vitrine;
