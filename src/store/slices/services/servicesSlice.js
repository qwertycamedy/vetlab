import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getServices = createAsyncThunk('services/getServices', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}services`);

        return data
    } catch (err) {
        console.log(`ошибка при получении данных services`);
    }
})

export const getServiceSlug = createAsyncThunk('services/')

const initialState = {
    servicesLoadStatus: 'idle',
    services: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getServices.pending, (state) => {
            state.servicesLoadStatus = loadStatus.pending;
        })
        .addCase(getServices.fulfilled, (state, action) => {
            state.servicesLoadStatus = loadStatus.fulfilled;
            state.services = action.payload.data;
        })
        .addCase(getServices.rejected, (state) => {
            state.servicesLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = servicesSlice.actions;
export const servicesSel = (state) => state.services;

export default servicesSlice.reducer;
