const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    resultModal: false,
}

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResultModal: (state,action) => {
        state.resultModal = action.payload;
    }
  }
});

export const {setResultModal} = resultSlice.actions;
export const resultSel = state => state.result;

export default resultSlice.reducer;
