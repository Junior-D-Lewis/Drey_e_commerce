import React from 'react';

const cartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = React.useState([]);
  const [countAllItems, setCountAllItems] = React.useState(0);
  const [products, setProducts] = React.useState([])

  const getCartItems = () => {
    fetch('http://localhost:3000/cart')
        .then((response) => response.json())
        .then((data) => {
            setCartItems(data)
            setCountAllItems(data.reduce((acc, cartItem) => acc + cartItem.quantity, 0))
        })
    console.log(countAllItems)
    }
    const getItems = () => {
        fetch('http://localhost:3000/items')
            .then((response) => response.json())
            .then((data) => setProducts(data))
    }

  React.useEffect(() => {
    getCartItems()
    getItems()
}, [])

const addToCart = async (id, quantity) => {
    const response = await fetch(`http://localhost:3000/cart/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity || 1,
      }),
    });
    if (response.ok) {
        getCartItems()
      console.log('Item added to cart');
    }
  }

  const updateCartItem = async (id, quantity) => {
    const response = await fetch(`http://localhost:3000/cart/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: quantity || 1,
      }),
    }); 
    if (response.ok) {
        getCartItems()
      console.log('Item updated in cart');
    }
    }

    const deleCartItem = async (id) => {
        const response = await fetch(`http://localhost:3000/cart/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
            getCartItems()
          console.log('Item deleted from cart');
        }
      }

    return (
        <cartContext.Provider value={{ cartItems,
        setCartItems, countAllItems, setCountAllItems,
        products,
        addToCart,
        updateCartItem,
        deleCartItem }}>
            {children}
        </cartContext.Provider>
    );
}

export const useCart = () => {
    return React.useContext(cartContext);
  };