import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchBooks = createAsyncThunk(
  'search/searchBooks',
  async (search, thunkAPI) => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
      if (!response.data) {
        throw new Error('No data received');
      }
      return response.data;
    } catch (error) {
      alert('Desole , on a pas trouver ce livres ')
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    result: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload; // Mettre à jour la propriété result avec les données de la réponse
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { reducer: searchReducers } = searchSlice;

export default searchSlice.reducer;
