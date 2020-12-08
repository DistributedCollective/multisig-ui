import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the MultiSigTransactionForm container
export const initialState: ContainerState = {};

const multiSigTransactionFormSlice = createSlice({
  name: 'multiSigTransactionForm',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const {
  actions,
  reducer,
  name: sliceKey,
} = multiSigTransactionFormSlice;
