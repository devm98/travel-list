export type Item = {
  id: number;
  quantity: number;
  description: string;
  packed: boolean;
};

export enum SORT_TYPE {
  PACKED = "packed",
  DESCRIPTION = "description",
  QUANTITY = "quantity",
}

export type ACTION_TYPE =
  | { type: "ADD_ITEM"; payload: Item }
  | { type: "REMOVE_ITEM"; payload: number }
  | {
      type: "UPDATE_PACKED";
      payload: {
        id: number;
        packed: boolean;
      };
    }
  | { type: "SORT_ITEMS"; payload: SORT_TYPE }
  | { type: "CLEAR_ITEMS" };
