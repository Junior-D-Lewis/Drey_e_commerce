import Header from './component/Header';
import Home from './component/Home';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header/>
        <Home />
      </CartProvider>
    </div>
  );
}

export default App;
