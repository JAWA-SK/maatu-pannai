import React, { useState } from "react";
import "../CssFiles/Form.css";
import { v4 as uuidv4 } from "uuid";

function Form() {
  let rate = "31";
  const [input, setInput] = useState([
    { id: uuidv4(), product: "", litres: "", lineage: "", paid: false },
  ]);

  const handleChange = () => {
    setInput([
      ...input,
      { id: uuidv4(), product: "", litres: "", lineage: "", paid: false },
    ]);
  };

  const handleRemoveChange = (id) => {
    const list = input.filter((item) => item.id !== id);
    setInput(list);
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
          return { ...item, paid: !item.paid };
        }
        return item;
      });
    });
  };

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
              <select name="name" className="formControl">
                <option value={"Milk"}>Milk</option>
                <option value={"Curd"}>Curd</option>
                <option value={"Ghee"}>Ghee</option>
                <option value={"Butter"}>Butter</option>
                <option value={"Panner"}>Paneer</option>
              </select>
            </div>
            <div className="form">
              <label>Lineage:</label>
              <select name="lineage">
                <option value={"gir"}>Gir Cow</option>
                <option value={"sahiwal"}>Sahiwal Cow</option>
                <option value={"red_sindhi"}>Red Sindhi Cow</option>
                <option value={"tharparkar"}>Tharparkar Cow</option>
                <option value={"murrah"}>Murrah Cow</option>
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
