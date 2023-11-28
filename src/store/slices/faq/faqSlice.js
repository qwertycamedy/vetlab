import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getFaq = createAsyncThunk('faq/getFaq', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}faq`);
        
        return data;
    } catch (err) {
        console.log(`ошибка при получении данных faq`);
    }
})

const initialState = {
    faqLoadStatus: 'idle',
    faq: null,
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(getFaq.pending, (state) => {
            state.faqLoadStatus = loadStatus.pending;
        })
        .addCase(getFaq.fulfilled, (state, action) => {
            state.faqLoadStatus = loadStatus.fulfilled
            state.faq = action.payload.data;
        })
        .addCase(getFaq.rejected, (state) => {
            state.faqLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = faqSlice.actions;
export const faqSel = (state) => state.faq;

export default faqSlice.reducer;
