import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getNews = createAsyncThunk('news/getNews', async () => {
    try {
        const {data} = await axios.get(process.env.REACT_APP_API_URL);

        console.log(data);

    } catch (err) {
        console.log(`ошибка при получении данных news`);
    }
})

const initialState = {
    newsLoadStatus: 'idle',
    news: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getNews.pending, (state) => {
            state.newsLoadStatus = loadStatus.pending;
        })
        .addCase(getNews.fulfilled, (state) => {
            state.newsLoadStatus = loadStatus.fulfilled
        })
        .addCase(getNews.rejected, (state) => {
            state.newsLoadStatus = loadStatus.rejected
        })
  }
});

// export const {} = newsSlice.actions;
export const newsSel = (state) => state.news;

export default newsSlice.reducer;
