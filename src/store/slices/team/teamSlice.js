import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getTeam = createAsyncThunk('team/getTeam', async () => {
    try {
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}specialists`);
        
        return data;
    } catch (err) {
        console.log(`ошибка при получении данных team`);
    }
});

const initialState = {
    teamLoadStatus: 'idle',
    team: null,
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getTeam.pending, (state) => {
            state.teamLoadStatus = loadStatus.pending;
        })
        .addCase(getTeam.fulfilled, (state, action) => {
            state.teamLoadStatus = loadStatus.fulfilled;
            state.team = action.payload.data;
        })
        .addCase(getTeam.rejected, (state) => {
            state.teamLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = teamSlice.actions;
export const teamSel = (state) => state.team;

export default teamSlice.reducer;
