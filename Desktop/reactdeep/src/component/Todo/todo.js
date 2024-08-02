import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //   add list functionality
  const addItem = () => {
    if (!inputdata) {
      alert("please add something");
    } else {
      setItems([...items, inputdata]);
      setInputData("");
    }
  };
  //   delete list functionality
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem !== index;
    });
    setItems(updatedItems);
  };
  // remove all the elements
  const removeAll = () => {
    setItems([]);
  };

  console.log(inputdata);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo" />
            <figcaption>Add Your List Here!</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add your list here"
              className="from-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-solid fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* show list */}

          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem}</h3>
                  <div className="todo-btn">
                    <i
                      className="far  fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          {/* remove all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
