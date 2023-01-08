import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { PersonSlice } from "./features/personSlice";

export const store = configureStore({
  reducer: {
    person: PersonSlice.reducer,
  },
});

// dispatch를 사용하기 위해서 type을 정해줌
// typescript에서 정해놓은 useDispatch, useSelector의 type
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;