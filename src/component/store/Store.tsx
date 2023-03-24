import { configureStore } from '@reduxjs/toolkit'
import PostSlice from '../store/slice/PostSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: { 
      post: PostSlice 
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  // Use throughout your app instead of plain `useDispatch` and `useSelector`
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;