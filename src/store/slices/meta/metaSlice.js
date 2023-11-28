import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getMeta = createAsyncThunk('meta/getMeta', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}metadata`);

        return data;
    } catch (err) {
        console.log(`ошибка при получении данных meta`);
    }
})

const initialState = {
    metaLoadStatus: 'idle',
    meta: '',
    title: '',
    subtitle: '',
    city: '',
    address: '',
    appointment_time: '',
    appointment_time_treatment: '',
    tel_num: '',
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getMeta.pending, (state) => {
            state.metaLoadStatus = loadStatus.pending;
        })
        .addCase(getMeta.fulfilled, (state, action) => {
            state.metaLoadStatus = loadStatus.fulfilled;
            state.meta = action.payload.data;
            state.city = action.payload.data[0]?.name;
            state.address = action.payload.data[1]?.name;
            state.title = action.payload.data[2]?.name;
            state.subtitle = action.payload.data[3]?.name;
            state.appointment_time = action.payload.data[4]?.name;
            state.appointment_time_treatment = action.payload.data[5]?.name;
            state.tel_num = action.payload.data[6]?.name;
        })
        .addCase(getMeta.rejected, (state) => {
            state.metaLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = metaSlice.actions;
export const metaSel = (state) => state.meta;

export default metaSlice.reducer;
