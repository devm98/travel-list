import { createContext } from "react";
import { ACTION_TYPE, Item } from "./types";

export const ItemsContext = createContext<Item[]>([]);
export const ItemsDispatchContext = createContext<React.Dispatch<ACTION_TYPE>>(
  () => {}
);
