import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.multiSigTransactionForm || initialState;

export const selectMultiSigTransactionForm = createSelector(
  [selectDomain],
  multiSigTransactionFormState => multiSigTransactionFormState,
);
