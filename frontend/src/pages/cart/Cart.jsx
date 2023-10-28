import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    let localCart = localStorage.getItem("cart");

    if (localCart) localCart = JSON.parse(localCart);

    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once

  const handleRemove = () => {
    localStorage.removeItem("cart");
    location.reload();
  };
  if (cart.length <= 0) {
    return (
      <div className="empty-msg">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-3613108-3020773.png"
          width="250px"
          alt=""
        />
        <h1>Cart is Empty !</h1>
        <NavLink to="/foods" className="return-shop">
          return to shop
        </NavLink>
      </div>
    );
  }

  const totalPrice = () => {
    let totalAmout = 0;
    cart.forEach((item) => {
      totalAmout += item.price * item.quantity;
    });
    return totalAmout;
  };
  const totalAmount = totalPrice();

  return (
    <div className="cart-food-list">
      <div className="cart-child">
        <h2 style={{ textAlign: "center" }}>Your Food List...</h2>
        {cart.map((item) => {
          const { name, price, img, id, quantity } = item;
          return (
            <div key={id} className="cart-item">
              <img src={img} alt="" />
              <p className="cart-item-name">{name}</p>
              <p className="cart-price">
                Rs. {price} x {quantity}
              </p>
            </div>
          );
        })}
      </div>
      {
        <div className="subtotal">
          <h2>Subtotal</h2>
          <div className="subtotao-details">
            <p>Total Price : Rs. {totalAmount}</p>
            <hr />
            <p>Final Price : Rs. {totalAmount}</p>
          </div>
          <button className="check-btn">Order Now</button>
          <button onClick={() => navigate("/foods")} className="return-btn">
            Return to shop
          </button>
          <p onClick={() => handleRemove()} className="delete-icon">
            Empty Cart: <DeleteForeverIcon />
          </p>
        </div>
      }
    </div>
  );
};

export default Cart;
