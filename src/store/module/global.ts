import { GlobalState } from '@/store/interface/index';
import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

const globalState:GlobalState = {
  token: "",
  userInfo: {},
}

export const GlobalSilce = createSlice({
  name: "global",
  initialState: globalState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<GlobalState>>) {
      state = {...state, ...action.payload};
    }
  }
})

export const { setGlobalState } = GlobalSilce.actions;
export default GlobalSilce.reducer;