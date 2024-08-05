import { FC, useContext, useState } from "react";
import { ItemsContext, ItemsDispatchContext } from "../ItemsContext";
import { Item, SORT_TYPE } from "../types";

const PackingList: FC = () => {
  const items = useContext(ItemsContext);
  const dispatch = useContext(ItemsDispatchContext);
  const [sortBy, setSortBy] = useState<SORT_TYPE | "">("");
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as SORT_TYPE);
            dispatch({
              type: "SORT_ITEMS",
              payload: e.target.value as SORT_TYPE,
            });
          }}
        >
          <option disabled value="">
            Sort by input order
          </option>
          <option value="packed">Sort by packed status</option>
          <option value="description">Sort by description</option>
          <option value="quantity">Sort by quantity</option>
        </select>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR_ITEMS" });
          }}
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

const PackingItem: React.FC<{ item: Item }> = ({ item }) => {
  const dispatch = useContext(ItemsDispatchContext);
  const handleDeleteItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleChangePacked = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const { checked } = e.target;
    dispatch({ type: "UPDATE_PACKED", payload: { id, packed: checked } });
  };

  return (
    <li className={item.packed ? "packed" : ""}>
      <input
        onChange={(e) => handleChangePacked(e, item.id)}
        type="checkbox"
        checked={item.packed}
      />
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default PackingList;
