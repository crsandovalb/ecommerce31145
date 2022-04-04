const ItemCount = ({ onAdd, stock, initial, count }) => {
  return (
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary" type="button"
        onClick={() => {
          if (count < stock) {
            onAdd("+");
          }
        }}
      >
        +
      </button>
      <div class="mx-auto">
      {count}
      </div>
      <button class="btn btn-primary" type="button"
        onClick={() => {

          if (count > initial) {
            onAdd("-");
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;
