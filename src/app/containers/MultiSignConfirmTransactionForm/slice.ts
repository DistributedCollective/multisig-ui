import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the MultiSignConfirmTransactionForm container
export const initialState: ContainerState = {};

const multiSignConfirmTransactionFormSlice = createSlice({
  name: 'multiSignConfirmTransactionForm',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions,
  reducer,
  name: sliceKey,
} = multiSignConfirmTransactionFormSlice;
