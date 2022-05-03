import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Vitrine from "../pages/Vitrine";

const Routers = ({ changeColor }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Vitrine theme={changeColor} />
      </Route>

      <Route path="/cart">
        <Carrinho theme={changeColor} />
      </Route>
    </Switch>
  );
};

export default Routers;
