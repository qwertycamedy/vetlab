import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getClients = createAsyncThunk('clients/getClients', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}patient-images`);

        console.log(data);
        return data;
    } catch (err) {
        console.log(`ошибка при получении данных clients`);
    }
});

const initialState = {
    clientsLoadStatus: 'idle',
    clients: null,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(getClients.pending, (state) => {
            state.clientsLoadStatus = loadStatus.pending;
        })
        .addCase(getClients.fulfilled, (state, action) => {
            state.clientsLoadStatus = loadStatus.fulfilled;
            state.clients = action.payload.data;
        })
        .addCase(getClients.rejected, (state) => {
            state.clientsLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = clientsSlice.actions;
export const clientsSel = (state) => state.clients;

export default clientsSlice.reducer;
