import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  id: null | string;
  email: null | string;
}

const initialState: IUser = {
  id: null,
  email: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
    },
  },
});
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
