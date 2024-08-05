import { FC, useContext, useState } from "react";
import { ItemsDispatchContext } from "../ItemsContext";
import { Item } from "../types";

const Form: FC = () => {
  const dispatch = useContext(ItemsDispatchContext);
  const initNewItem = {
    id: Date.now(),
    quantity: 1,
    description: "",
    packed: false,
  };
  const [newItem, setNewItem] = useState<Item>(initNewItem);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...newItem,
        quantity: +newItem.quantity,
      },
    });
    setNewItem(initNewItem);
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    const { name, value } = e.target;
    console.log({
      name,
      value,
    });
    setNewItem((prevI) => ({
      ...prevI,
      [name]: value,
    }));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" onChange={handleChange} value={newItem.quantity}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        name="description"
        type="text"
        placeholder="Item..."
        onChange={handleChange}
        value={newItem.description}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
