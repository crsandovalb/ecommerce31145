import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";

const ItemListContainer = (props) => {
  const [count, setCount] = useState(1);
  const onAdd = (conditions) => {
    if (conditions === "-") {
      setCount(count - 1);
    }
    if (conditions === "+") {
      setCount(count + 1);
    }
  };

  const stock = 5;
  const initial = 1;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex justify-content-center pt-3">
            <h1 className="h1_ListContainer">{props.greeting}</h1>
          </div>
          <div>
            <ItemCount
              onAdd={onAdd}
              stock={stock}
              initial={initial}
              count={count}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
