import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const product = action.payload;
      const exits = state.cartList.find((x) => x.id === product.id);
      if (!exits) state.cartList.push({ ...product, qty: 1 });
    },

    // ລືບຈຳນວນສິນຄ້າທັງໝົດບາດດຽວ
    removeCartItem: (state, action) => {
      state.cartList.splice(action.payload, 1);
    },
    
    // ບວກຈຳນວນເທື່ອລະໜຶ່ງ
    incrementCartItem: (state, action) => {
      state.cartList[action.payload].qty += 1;
    },

    // ລົບຈຳນວນເທື່ອລະໜຶ່ງ
    decrementCartItem: (state, action) => {
      if (state.cartList[action.payload].qty === 1) {
        state.cartList.splice(action.payload, 1);
      } else {
        state.cartList[action.payload].qty -= 1;
      }
    },
  },
});

export const { addCartItem, removeCartItem, incrementCartItem, decrementCartItem } = cartSlice.actions;
export default cartSlice.reducer;
