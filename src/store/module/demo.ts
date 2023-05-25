import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";


interface IDemo {
    name: string;
}

interface IInit {
  demoInfo: IDemo;
}

const initialState: IInit = {
  demoInfo: {
    name: "demo",
  }
}

export const DemoSilce = createSlice({
  name: "demo",
  initialState,
  reducers: {
    setDemoInfo(state, action: PayloadAction<IDemo>) {
      state.demoInfo = action.payload;
    }
  }
})

export const { setDemoInfo } = DemoSilce.actions;
export default DemoSilce.reducer;