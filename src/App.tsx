import { useReducer } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { ItemsContext, ItemsDispatchContext } from "./ItemsContext";
import itemsReducer from "./reducers";
import { Item } from "./types";

const initialItems: Item[] = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
] as const;

const App = () => {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);
  return (
    <ItemsContext.Provider value={items}>
      <ItemsDispatchContext.Provider value={dispatch}>
        <div className="app">
          <Logo />
          <Form />
          <PackingList />
          <Stats />
        </div>
      </ItemsDispatchContext.Provider>
    </ItemsContext.Provider>
  );
};

export default App;
