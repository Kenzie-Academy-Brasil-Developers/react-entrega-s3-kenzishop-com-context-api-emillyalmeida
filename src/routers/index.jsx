import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Vitrine from "../pages/Vitrine";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Vitrine />
      </Route>

      <Route path="/cart">
        <Carrinho />
      </Route>
    </Switch>
  );
};

export default Routers;
