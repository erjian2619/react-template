import { configureStore, combineReducers } from '@reduxjs/toolkit'
import DemoSilce from './module/demo'
import GlobalSilce from './module/global'


export const store = configureStore({
    reducer: combineReducers({
      demo: DemoSilce,
      global: GlobalSilce
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch