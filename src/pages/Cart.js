import React, { useContext } from "react";
import { CartContext } from "../components/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Layout from '../components/layout/Layout';
import {navigate} from 'gatsby';

const Cart = () => {
  const history = useHistory();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);
 

  if (!cart.length) {
    //return <h3>Empty Cart</h3>
    return <Layout>
              <section className="cart">
                <header>
                  <b>Shopping Cart is empty.</b>
                </header>
                <div className="emptycart-image">
                  <img src="https://productimages163502-dev.s3.ap-south-1.amazonaws.com/public/images/empty_shopping_cart.png" alt="cart item" />
                </div>
              </section>
            </Layout>
  }
  console.log('Cart: ' + JSON.stringify(cart));
  
  return (
    <Layout>
    <section className="cart">
      <header>
        <div>&nbsp;</div>
        <div style={{backgroundColor: '#00A4EF'}}><span className="text-2xl lg:text-3xl xl:text-3xl">Shopping Cart</span></div>
      </header>
      
      <div className="cart-wrapper">
        {cart.map(({ id, title, price, image, amount }) => (
          <article key={id} className="cart-item">
            <div className="image">
              <img src={image} alt="cart item" />
            </div>
            <div className="details">
              <p>{title}</p>
            </div>
            <div className="amount">
              <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
              <p>{amount}</p>
              <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
            </div>
            <div className="details">
              <p>Rs. {price}</p>
            </div>
            
          </article>
        ))}
      </div>
      <div>
        <h3>Total: Rs. {total}</h3>
      </div>
      <div className="btn-container">
      <button
            className="btn"
            onClick={() => {
              navigate('/Checkout/');
            }}
          >
          Checkout
        </button>
        {/* <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button> */}
      </div>
    </section>
    </Layout>
  );
};

export default Cart;
