import { Li } from "./styles";

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
        Adcionar ao carrinho
      </button>
    </Li>
  );
};

export default VitrineCard;
