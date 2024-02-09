import { loadStatus } from '@store/loadStatus';
import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getAvailableTime = createAsyncThunk(
  'booking/getAvailableTime',
  async ({ queryParams }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}available-time-slots2?date=${queryParams.date}&service_id=${queryParams.serviceId}&specialist_id=${queryParams.specialistId}`,
      );

      return data;
    } catch (err) {
      console.log(`ошибка при получении данных свободного времени`);
    }
  },
);



export const bookAppointment = createAsyncThunk(
  'booking/bookAppointment',
  async ({ bodyParams }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}appointments-book2`,
        bodyParams,
      );

      return data;
    } catch (err) {
      console.log(`ошибка при отправке записи на прием`);
    }
  },
);

const initialState = {
  bookingLoadStatus: 'idle',
  bookingModal: false,
  further: false,

  serviceOptSel: null,
  teamOptSel: null,

  dateInput: '',
  timeSlots: null,
  timeOptSel: null,

  nameInput: '',
  telInput: '',

  termsChecked: false,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingModal: (state, action) => {
      state.bookingModal = action.payload;
      state.further = false;
      state.nameInput = "";
      state.telInput = "";
      state.dateInput = "";
      state.teamOptSel = null;
      state.timeSlots = null;
      state.serviceOptSel = null;
      state.timeOptSel = null;
    },
    setServiceOptSel: (state, action) => {
      state.serviceOptSel = action.payload;
    },
    setTeamOptSel: (state, action) => {
      state.teamOptSel = action.payload;
    },
    setTimeOptSel: (state, action) => {
      state.timeOptSel = action.payload;
    },

    setDateInput: (state, action) => {
      state.dateInput = action.payload;
    },

    setNameInput: (state, action) => {
      state.nameInput = action.payload;
    },
    setTelInput: (state, action) => {
      state.telInput = action.payload;
    },

    setTermsChecked: (state, action) => {
      state.termsChecked = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAvailableTime.pending, (state) => {
        state.bookingLoadStatus = loadStatus.pending;
      })
      .addCase(getAvailableTime.fulfilled, (state, action) => {
        state.bookingLoadStatus = loadStatus.fulfilled;
        state.timeSlots = action.payload.available_time_slots;
        state.further = true;
      })
      .addCase(getAvailableTime.rejected, (state) => {
        state.bookingLoadStatus = loadStatus.rejected;
      });
    builder
      .addCase(bookAppointment.pending, (state) => {
        state.bookingLoadStatus = loadStatus.pending;
      })
      .addCase(bookAppointment.fulfilled, (state) => {
        state.bookingLoadStatus = loadStatus.fulfilled;
        state.bookingModal = false
        state.further =false;
      })
      .addCase(bookAppointment.rejected, (state) => {
        state.bookingLoadStatus = loadStatus.rejected;
      });
  },
});

export const {
  setBookingModal,
  setServiceOptSel,
  setTeamOptSel,
  setTimeOptSel,
  setTermsChecked,
  setDateInput,
  setTimeInput,
  setNameInput,
  setTelInput,
} = bookingSlice.actions;
export const bookingSel = (state) => state.booking;

export default bookingSlice.reducer;
