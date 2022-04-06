import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((prods) => {
      setProducts(prods);
    });
  }, []);

  const [count, setCount] = useState(1);
  function onAdd(conditions) {
    if (conditions === "-") {
      setCount(count - 1);
    }
    if (conditions === "+") {
      setCount(count + 1);
    }
  }

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
            <div>
              <ItemList products={products} />
            </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
