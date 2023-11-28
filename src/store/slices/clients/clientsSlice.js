import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getClients = createAsyncThunk('clients/getClients', async () => {
    try {
        const {data} = await axios.get(process.env.REACT_APP_API_URL);

        console.log(data);

    } catch (err) {
        console.log(`ошибка при получении данных clients`);
    }
});

const initialState = {
    clientsLoadStatus: 'idle',
    clients: '',
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getClients.pending, (state) => {
            state.clientsLoadStatus = loadStatus.pending;
        })
        .addCase(getClients.fulfilled, (state) => {
            state.clientsLoadStatus = loadStatus.fulfilled
        })
        .addCase(getClients.rejected, (state) => {
            state.clientsLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = clientsSlice.actions;
export const clientsSel = (state) => state.clients;

export default clientsSlice.reducer;
