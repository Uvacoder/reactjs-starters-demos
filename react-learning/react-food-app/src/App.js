import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"

const App =()=> {
  return (
    <>
    <Header/>
    <main>
      <Meals/>
    <Cart/>
    </main>
    </>
  );
}

export default App;
