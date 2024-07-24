import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { login, logout } from "../../redux/user/slice";
import { selectProductsCount } from "../../redux/cart/cart.selectors";

// Utilities

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  //Acessando o reduce por meio do useSelector
  const { currentUser } = useSelector((rootReducer) => rootReducer.useReducer);

  //Soma a quantidade de itens adicionados no carrinho
  const productsCount = useSelector(selectProductsCount);

  const dispatch = useDispatch(); //Chamando o useDispatch

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  //Configurando  a action para fazer o dispatch
  //Lembre-se que a action e um objeto
  //Fazendo login
  const handleLoginClick = () => {
    dispatch(login({ name: "jack", email: "jackonfire@gmail.com" }));
  };

  //Fazendo logout
  //O payload e opcional
  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
