import { configureStore, createSlice } from "@reduxjs/toolkit";


const titleSlice = createSlice({

  name: "title",
  initialState: {
    title: "Welcome First things first", subTitle: "You can alwayz change the later",
    isStep0Active: true, isStep1Active: false, isStep2Active: false, isStep3Active: false, isStep4Active: false,
    btnMsg: "Create Workspace", isDot0: true, isDot1: false, isdot2: false, isDot3: false, isDot4: false, stepperLineWidth: 0
  },
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload
    },
    changesubTitle(state, action) {
      state.subTitle = action.payload
    },
    changeStep0(state, action) {
      state.isStep0Active = action.payload
    },
    changeStep1(state, action) {
      state.isStep1Active = action.payload
    },
    changeStep2(state, action) {
      state.isStep2Active = action.payload
    },

    changeStep3(state, action) {
      state.isStep3Active = action.payload
    },
    changeStep4(state, action) {
      state.isStep4Active = action.payload
    },

    changeBtnMsg(state, action) {
      state.btnMsg = action.payload
    },

    changeDot0(state, action) {
      state.isDot0 = action.payload
    },

    changeDot1(state, action) {
      state.isDot1 = action.payload
    },
    changeDot2(state, action) {
      state.isdot2 = action.payload
    },

    changeDot3(state, action) {
      state.isDot3 = action.payload
    },
    changeDot4(state, action) {
      state.isDot4 = action.payload
    },

    changeStLineWidth(state, action) {
      state.stepperLineWidth = action.payload
    }
  }


})

export const action = titleSlice.actions;

const store = configureStore({
  reducer: titleSlice.reducer
})




export default store