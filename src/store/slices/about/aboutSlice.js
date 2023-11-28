import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getAbout = createAsyncThunk('about/getAbout', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}about`);

        return data;
    } catch (err) {
        console.log(`ошибка при получении данных about`);
    }
})

const initialState = {
    aboutLoadStatus: 'idle',
    about: null,
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  extraReducers: (builder) => {
    builder
        .addCase(getAbout.pending, (state) => {
            state.aboutLoadStatus = loadStatus.pending;
        })
        .addCase(getAbout.fulfilled, (state, action) => {
            state.aboutLoadStatus = loadStatus.fulfilled
            state.about = action.payload.data;
        })
        .addCase(getAbout.rejected, (state) => {
            state.aboutLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = aboutSlice.actions;
export const aboutSel = (state) => state.about;

export default aboutSlice.reducer;
