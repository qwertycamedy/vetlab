import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getReviews = createAsyncThunk('reviews/getReviews', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}reviews`);

        return data;
    } catch (err) {
        console.log(`ошибка при получении данных reviews`);
    }
})

const initialState = {
    reviewsLoadStatus: 'idle',
    reviews: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(getReviews.pending, (state) => {
            state.reviewsLoadStatus = loadStatus.pending;
        })
        .addCase(getReviews.fulfilled, (state,action) => {
            state.reviewsLoadStatus = loadStatus.fulfilled;
            state.reviews = action.payload.data;
        })
        .addCase(getReviews.rejected, (state) => {
            state.reviewsLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = reviewsSlice.actions;
export const reviewsSel = (state) => state.reviews;

export default reviewsSlice.reducer;
