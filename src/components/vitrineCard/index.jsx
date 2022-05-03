import { Li } from "./styles";
import { BsCart2 } from "react-icons/bs";

const VitrineCard = ({ product, add }) => {
  const { id, name, price, img } = product;

  return (
    <Li>
      <div>
        <img src={img} alt={name} />
      </div>

      <h3>{name}</h3>
      <span>R$: {price.toFixed(2).replace(".", ",")}</span>
      <button id={id} onClick={() => add(product)}>
        <BsCart2 /> Adcionar
      </button>
    </Li>
  );
};

export default VitrineCard;
