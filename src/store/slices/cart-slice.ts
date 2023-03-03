import { IGame } from "./../../types/game";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  itemsInCart: IGame[];
}

const initialState: ICart = {
  itemsInCart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IGame>) {
      state.itemsInCart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.itemsInCart = state.itemsInCart.filter(
        (game) => game.id !== action.payload
      );
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
