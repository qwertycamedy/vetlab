import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getNews = createAsyncThunk('news/getNews', async ({curPage}) => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}news?page=${curPage}`);
    return data;
  } catch (err) {
    console.log(`ошибка при получении данных news`);
  }
});

export const getNewstory = createAsyncThunk(
  'news/getNewstory',
  async ({ slug }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}news/${slug}`,
      );

      return data;
    } catch (err) {
      console.log(`ошибка при получении данных newstory`);
    }
  },
);

const initialState = {
  newsLoadStatus: 'idle',
  news: null,
  curPage: 1,
  prev: null,
  next: null,
  newstory: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setCurPage: (state,action) => {
      state.curPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.newsLoadStatus = loadStatus.pending;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.newsLoadStatus = loadStatus.fulfilled;
        state.news = action.payload.data;
        state.prev = action.payload.links.prev;
        state.next = action.payload.links.next;
      })
      .addCase(getNews.rejected, (state) => {
        state.newsLoadStatus = loadStatus.rejected;
      });
    builder
      .addCase(getNewstory.pending, (state) => {
        state.newsLoadStatus = loadStatus.pending;
      })
      .addCase(getNewstory.fulfilled, (state, action) => {
        state.newsLoadStatus = loadStatus.fulfilled;
        state.newstory = action.payload.data;
      })
      .addCase(getNewstory.rejected, (state) => {
        state.newsLoadStatus = loadStatus.rejected;
      });
  },
});

export const {setCurPage} = newsSlice.actions;
export const newsSel = (state) => state.news;

export default newsSlice.reducer;
