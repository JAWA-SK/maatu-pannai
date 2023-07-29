import React, { useState } from "react";
import "../CssFiles/Cart.css";

function Cart() {
  const array = JSON.parse(localStorage.getItem("cart"));

  const initialQuantities = array.reduce((acc, item) => {
    if (item.paid) {
      acc[item.id] = 1;
    }
    return acc;
  }, {});
  const [quantities, setQuantities] = useState(initialQuantities);
  const increment = (id) => {
    setQuantities((prevQuantities) => {
      const prevQuantity = prevQuantities[id] || 0;
      const newQuantity = prevQuantity + 1;
      return {
        ...prevQuantities,
        [id]: Math.min(5, newQuantity),
      };
    });
  };

  const decrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) - 1),
    }));
  };

  return (
    <div>
      <div>
        <div className="outerPortion">
          <div className="leftPortion">
            {array.map((item) => {
              if (item.paid) {
                const id = item.id; 
                const imageUrl = `public/${item.product}.png`;

                return (
                  <div className="innerPortion" key={id}>
                    <div className="items">
                      <div className="quantityButtonsCover">
                        <button
                          className="quantityButtons"
                          onClick={() => decrement(id)}
                          disabled={quantities === 1}
                          style={
                            quantities[id] < 2
                              ? {
                                  color: "black",
                                  backgroundColor: " rgb(87, 84, 84)",
                                }
                              : {}
                          }
                        >
                          -
                        </button>
                        {console.log("quantities" + quantities)}
                        <span className="quantityCounter">
                          {quantities[id] || 0}
                        </span>
                        <button
                          className="quantityButtons"
                          onClick={() => increment(id)}
                          disabled={quantities === 5}
                          style={
                            quantities[id] > 4
                              ? {
                                  color: "black",
                                  backgroundColor: " rgb(87, 84, 84)",
                                }
                              : {}
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="items">
                      <img className="cartImage" src={imageUrl} alt="Product" />
                      {item.product}
                    </div>
                    <div className="items">
                      <img
                        className="cartImage"
                        src={"public/Drop.png"}
                        alt="Litres"
                      />
                      {item.litres}
                      <span style={{ fontWeight: "none", fontSize: "13px" }}>
                        Litres
                      </span>
                    </div>

                    <div className="items">
                      <img
                        className="cartImage"
                        src={"public/cartCow.png"}
                        alt="Lineage"
                      />
                      {item.lineage}
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="rightPortion">
            <span>hello</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
