import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ChainId,
  ContainerState,
  TransactionStatus,
  TransactionType,
} from './types';
import { getNetwork } from '../../../utils/helpers';

// The initial state of the BlockChainProvider container
export const initialState: ContainerState = {
  network: 'rsk_testnet',
  chainId: 31,
  setupCompleted: false,
  connected: false,
  connecting: false,
  address: '',
  governanceContractConfig: {
    proposalMaxOperations: 10,
    votingDelay: 1,
    votingPeriod: 8640,
    proposalThreshold: 0,
    quorumVotes: 0,
  },
  blockNumber: 0,
  syncBlockNumber: 0,
  transactionStack: [],
  transactions: {},
  showTransactions: false,
};

const blockChainProviderSlice = createSlice({
  name: 'blockChainProvider',
  initialState,
  reducers: {
    setup(state) {
      state.setupCompleted = false;
    },
    setupCompleted(state) {
      state.setupCompleted = true;
    },
    connect(state) {
      state.connecting = true;
    },
    connected(state, { payload }: PayloadAction<{ address: string }>) {
      state.connecting = false;
      state.connected = true;
    },
    disconnect() {},
    disconnected(state) {
      state.connecting = false;
      state.connected = false;
      state.address = '';
    },
    accountChanged(state, { payload }: PayloadAction<string>) {
      state.address = payload || '';
    },
    chainChanged(
      state,
      { payload }: PayloadAction<{ chainId: ChainId; networkId: number }>,
    ) {
      state.chainId = payload.chainId;
      state.network = getNetwork(payload.chainId);
    },

    // block watcher

    reSync(state, action: PayloadAction<number>) {
      state.syncBlockNumber = action.payload;
    },

    readerReady() {},

    blockFailed(state, action: PayloadAction<string>) {
      console.error('block failed');
    },
    blockReceived(state, { payload }: PayloadAction<any>) {
      state.blockNumber = Number(payload.number);
    },

    processBlock(state, action: PayloadAction<any>) {},

    // transactions
    addTransaction(
      state,
      {
        payload,
      }: PayloadAction<{
        transactionHash: string;
        to: string;
        type?: TransactionType;
      }>,
    ) {
      state.transactionStack.push(payload.transactionHash);
      state.transactions[payload.transactionHash] = {
        transactionHash: payload.transactionHash,
        status: 'pending',
        to: payload.to,
        type: payload.type,
      };
      state.showTransactions = true;
    },
    updateTransactionStatus(
      state,
      {
        payload,
      }: PayloadAction<{ transactionHash: string; status: TransactionStatus }>,
    ) {
      if (state.transactions.hasOwnProperty(payload.transactionHash)) {
        state.transactions[payload.transactionHash].status = payload.status;
      }
    },
    toggleTransactionDrawer(state, { payload }: PayloadAction<boolean>) {
      state.showTransactions = payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = blockChainProviderSlice;
