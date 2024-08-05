import { ACTION_TYPE, Item } from "./types";

const itemsReducer = (state: Item[], action: ACTION_TYPE) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "UPDATE_PACKED":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    case "CLEAR_ITEMS":
      return [];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "SORT_ITEMS":
      switch (action.payload) {
        case "description":
          return [...state].sort((a, b) =>
            a.description.localeCompare(b.description)
          );
        case "packed":
          return [...state].sort((a, b) => Number(a.packed) - Number(b.packed));
        case "quantity":
          return [...state].sort((a, b) => a.quantity - b.quantity);
        default:
          return state;
      }
    default:
      return state;
  }
};

export default itemsReducer;
