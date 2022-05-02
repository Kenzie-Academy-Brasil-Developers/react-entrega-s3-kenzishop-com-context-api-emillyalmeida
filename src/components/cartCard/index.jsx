import { LiCart } from "./styles";

const CartCard = ({ product, remove }) => {
  const { id, name, price, img, qtd } = product;
  return (
    <LiCart>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <section>
        <h3>{name}</h3>
        <span>R$: {price.toFixed(2).replace(".", ",")}</span>
      </section>
      <div>
        <span> Quantidade: {qtd}</span>
        <button id={id} onClick={(e) => remove(e.target.id)}>
          Remover
        </button>
      </div>
    </LiCart>
  );
};

export default CartCard;
