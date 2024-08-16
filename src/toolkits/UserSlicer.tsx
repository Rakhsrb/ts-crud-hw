import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState: User[] = JSON.parse(localStorage.getItem("users") || "[]");

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action: PayloadAction<User>) {
      const newData = [...state, action.payload];
      localStorage.setItem("users", JSON.stringify(newData));
      return newData;
    },
    deleteUser(state, action: PayloadAction<string>) {
      const updatedData = state.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(updatedData));
      return updatedData;
    },
    updateUser(state, action: PayloadAction<User>) {
      const existedData = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem("users", JSON.stringify(existedData));
      return existedData;
    },
  },
});

// Export actions and reducer
export const { createUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
