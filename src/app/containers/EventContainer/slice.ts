import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the EventContainer container
export const initialState: ContainerState = {};

const eventContainerSlice = createSlice({
  name: 'eventContainer',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = eventContainerSlice;
