import { useContext } from "react";
import { ItemsContext } from "../ItemsContext";

const Stats = () => {
  const state = useContext(ItemsContext);
  const packedItems = state.filter((item) => item.packed);
  const percentage = Math.round((packedItems.length / state.length) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ? (
          "You got everything! Ready to go ✈️"
        ) : (
          <>
            You have {state.length} items on your list, and you already packed{" "}
            {packedItems.length} ({percentage}% ).
          </>
        )}
      </em>
    </footer>
  );
};

export default Stats;
