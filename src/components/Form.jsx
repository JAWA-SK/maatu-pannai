import React, { useEffect, useState } from "react";
import "../CssFiles/Form.css";
import { v4 as uuidv4 } from "uuid";

function Form() {
  let rate = "31";

  const initialInput = JSON.parse(localStorage.getItem("cart")) || [
    { id: uuidv4(), product: "Milk", litres: "", lineage: "Gir Cow", paid: false },
  ];

  const [input, setInput] = useState(initialInput);

  const handleChange = () => {
    setInput([
      ...input,
      {
        id: uuidv4(),
        product: "Milk",
        litres: "",
        lineage: "Gir Cow",
        paid: false,
      },
    ]);
  };

  const handleRemoveChange = (id) => {
    const list = input.filter((item) => item.id !== id);
    setInput(list);
    localStorage.setItem("cart", JSON.stringify(list));
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedInput = input.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      }
      return item;
    });
    setInput(updatedInput);
  };

  const changeColor = (id) => {
    setInput((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          const newItem = { ...item, paid: !item.paid };
          localStorage.setItem("cart", JSON.stringify(prevState));
          return newItem;
        }
        return item;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(input));
  }, [input]);
  return (
    <div className="form-container">
      <div className="running-text">
        Milk Rate is increased to Rs.{rate}/Litre (Max 20Litre/person)
      </div>
      {input.map(({ product, litres, id, lineage, paid }) => {
        return (
          <div className="rowWise" key={id}>
            <div className="form">
              <label>Products:</label>
              <select name="product" className="formControl" value={product} onChange={(e)=>handleInputChange(e,id)}>
                <option value={"Milk"}>Milk</option>
                <option value={"Curd"}>Curd</option>
                <option value={"Ghee"}>Ghee</option>
                <option value={"Butter"}>Butter</option>
                <option value={"Panner"}>Paneer</option>
              </select>
            </div>
            <div className="form">
              <label>Lineage:</label>
              <select name="lineage" className="formControl" value={lineage} onChange={(e)=>handleInputChange(e,id)}>
                <option value={"Gir"}>Gir</option>
                <option value={"Sahiwal"}>Sahiwal</option>
                <option value={"Red Sindhi"}>Red Sindhi</option>
                <option value={"Tharparkar"}>Tharparkar</option>
                <option value={"Murrah"}>Murrah</option>
              </select>
            </div>
            <div className="form">
              <label>Quantity:</label>
              <input
                type="text"
                name="litres"
                className="formControl"
                placeholder="Enter the quantity"
                autoComplete="off"
                spellCheck="false"
                value={litres}
                onChange={(e) => handleInputChange(e, id)}
              ></input>
            </div>
            <div className="form">
              <button
                className={`payButton ${paid ? "paid" : ""}`}
                onClick={() => changeColor(id)}
              >
                {paid
                  ? !isNaN(litres)
                    ? "Remove cart"
                    : "Invalid"
                  : !isNaN(litres)
                  ? "Add to cart"
                  : "Invalid"}
              </button>
            </div>
            <div className="buttonForm">
              {input.length === 1 ? (
                <button className="addMore" onClick={handleChange}>
                  Add More
                </button>
              ) : (
                <>
                  <button className="addMore" onClick={handleChange}>
                    Add More
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemoveChange(id)}
                  >
                    Remove
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
