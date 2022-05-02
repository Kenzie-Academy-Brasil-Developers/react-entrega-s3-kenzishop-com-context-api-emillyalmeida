import garotaDoLago from "../../assets/a-garota-do-lago_3D.png";
import guerraDoVelho from "../../assets/guerra.jpg";
import nomeDoVento from "../../assets/o-nome-do-vento.jpg";
import sixOfCrows from "../../assets/six-of-crows_duology.png";
import EassimQueAcaba from "../../assets/E-Assim-que-Acaba.png";
import floresParaAlgernon from "../../assets/flores-para-algernon.webp";
import jogosVorazes from "../../assets/jogosvorazes.png";
import milnovecentos from "../../assets/1984.jpeg";

import { createContext, useState } from "react";

export const ListProductsContext = createContext([]);

export const ListProductsProvider = ({ children }) => {
  const [listProducts] = useState([
    {
      id: 1,
      name: "A garota do lago",
      price: 10,
      img: garotaDoLago,
    },
    {
      id: 2,
      name: "Guerra do velho",
      price: 34.5,
      img: guerraDoVelho,
    },
    {
      id: 3,
      name: "O nome do vento",
      price: 45,
      img: nomeDoVento,
    },
    {
      id: 4,
      name: "Six of Crows ",
      price: 68.99,
      img: sixOfCrows,
    },
    {
      id: 5,
      name: "È assim que acaba",
      price: 30,
      img: EassimQueAcaba,
    },
    {
      id: 6,
      name: "Flores para Algernon",
      price: 39.0,
      img: floresParaAlgernon,
    },
    {
      id: 7,
      name: "Jogos Vorazes",
      price: 29.9,
      img: jogosVorazes,
    },
    {
      id: 8,
      name: "1984",
      price: 35.0,
      img: milnovecentos,
    },
  ]);

  return (
    <ListProductsContext.Provider value={{ listProducts }}>
      {children}
    </ListProductsContext.Provider>
  );
};
