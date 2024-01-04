import React, { Fragment,useState } from 'react';
import Header from "./components/Layout/Header";
import Summary from "./components/Layout/Summary";
import Meallist from './components/Meal/MealList';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Summary />
      <Meallist />
    </Fragment>
  );
}

export default App;
