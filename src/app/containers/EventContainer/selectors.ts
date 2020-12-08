import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.eventContainer || initialState;

export const selectEventContainer = createSelector(
  [selectDomain],
  eventContainerState => eventContainerState,
);
