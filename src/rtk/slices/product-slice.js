import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Loder from "../../components/Loder/Loder";

export const fetchproducts = createAsyncThunk(
  "productSlice/fetchproducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: [
    {isloadin:false}
  ],

  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchproducts.pending,(state, action) => {
    
        
      
      

  })


    builder.addCase(fetchproducts.fulfilled,(state, action) => {
     
        return action.payload;
        

    })
  }
 
  
});

export const { increment } = productSlice.actions;

export default productSlice.reducer;
