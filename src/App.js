
import './App.css';
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Building A Redux Shopping Cart</h1>
        <ProductList />
        <CartList />
      </div>
    </Provider>
  );
}

export default App;
