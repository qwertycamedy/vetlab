const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  bookingModal: false,
  serviceOptions: [
    {
      id: 1,
      value: 'Значение 1',
    },
    {
      id: 2,
      value: 'Значение 2',
    },
    {
      id: 3,
      value: 'Значение 3',
    },
    {
      id: 4,
      value: 'Значение 4',
    },
  ],
  serviceOptSel: null,
  
  teamOptions: [
    {
      id: 1,
      value: 'Значение 1',
    },
    {
      id: 2,
      value: 'Значение 2',
    },
    {
      id: 3,
      value: 'Значение 3',
    },
    {
      id: 4,
      value: 'Значение 4',
    },
  ],
  teamOptSel: null,

  dateInput: '',
  timeInput: '',

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
    },
    setServiceOptSel: (state, action) => {
      state.serviceOptSel = action.payload;
    },
    setTeamOptSel: (state, action) => {
      state.teamOptSel = action.payload;
    },

    setDateInput: (state, action) => {
      state.dateInput = action.payload;
    },
    setTimeInput: (state, action) => {
      state.timeInput = action.payload;
    },
    
    setNameInput: (state, action) => {
      state.nameInput = action.payload;
    },
    setTelInput: (state, action) => {
      state.telInput = action.payload;
    },

    setTermsChecked: (state,action) => {
      state.termsChecked = action.payload;
    },
  },
});

export const { setBookingModal, setServiceOptSel, setTeamOptSel, setTermsChecked, setDateInput, setTimeInput, setNameInput, setTelInput } =
  bookingSlice.actions;
export const bookingSel = (state) => state.booking;

export default bookingSlice.reducer;
