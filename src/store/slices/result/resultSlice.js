import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getVerCode = createAsyncThunk(
  'result/getVerCode',
  async ({ phone }) => {
    const bodyParams = {
      phone,
    };
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}new_send-verification-code`,
        bodyParams,
      );

      return data;
    } catch (err) {
      console.log(`ошибка при получении кода верификации`);
    }
  },
);

export const getResults = createAsyncThunk(
  'result/getResults',
  async ({ bodyParams }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}new1_clinic_results`,
        bodyParams,
      );

      return data;
    } catch (err) {
      console.log(`ошибка при отправке записи на прием`);
    }
  },
);

const initialState = {
  resultLoadStatus: 'idle',
  resultModal: false,
  further: false,
  telInput: '',
  verificationCode: '',
  results: null,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultModal: (state, action) => {
      state.resultModal = action.payload;
      state.further = false;
      state.telInput = '';
      state.verificationCode = '';
    },
    setTelInput: (state, action) => {
      state.telInput = action.payload;
    },
    setVerificationCode: (state, action) => {
      state.verificationCode = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getVerCode.pending, (state) => {
        state.resultLoadStatus = loadStatus.pending;
      })
      .addCase(getVerCode.fulfilled, (state) => {
        state.resultLoadStatus = loadStatus.fulfilled;
        alert('Код подтверждения отправлен!');
        state.further = true;
      })
      .addCase(getVerCode.rejected, (state) => {
        state.resultLoadStatus = loadStatus.rejected;
      });
    builder
      .addCase(getResults.pending, (state) => {
        state.resultLoadStatus = loadStatus.pending;
      })
      .addCase(getResults.fulfilled, (state, action) => {
        state.resultLoadStatus = loadStatus.fulfilled;

        if (action.payload === undefined || action.payload?.results?.length < 1) {
          alert('Результаты по данному номеру не найдены');
          state.resultModal = false;
          state.further = false;
          state.telInput = '';
          return;
        }
      })
      .addCase(getResults.rejected, (state) => {
        state.resultLoadStatus = loadStatus.rejected;
      });
  },
});

export const { setResultModal, setTelInput, setVerificationCode } =
  resultSlice.actions;
export const resultSel = (state) => state.result;

export default resultSlice.reducer;
