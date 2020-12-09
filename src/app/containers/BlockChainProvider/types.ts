import { AbiItem } from 'web3-utils';

/* --- STATE --- */
export interface BlockChainProviderState {
  network: NetworkName;
  chainId: ChainId;
  setupCompleted: boolean;
  connected: boolean;
  connecting: boolean;
  address: string;
  blockNumber: number;
  syncBlockNumber: number;
  transactionStack: string[];
  transactions: Transactions;
  showTransactions: boolean;
}

export type NetworkName = keyof IContractNetworks;
export type ChainId = 1 | 3 | 30 | 31;

export type ContainerState = BlockChainProviderState;

export interface IContractNetworks {
  eth_mainnet: INetworkToContract;
  eth_ropsten: INetworkToContract;
  rsk_mainnet: INetworkToContract;
  rsk_testnet: INetworkToContract;
}

export interface INetworkToContract {
  multiSigWallet: IContract;
}

export interface IContract {
  address: string;
  abi: AbiItem[] | AbiItem;
}

export interface Transactions {
  [transactionHash: string]: Transaction;
}

export type TransactionStatus = 'pending' | 'confirmed' | 'failed';
export type TransactionType =
  | 'submitTransaction'
  | 'confirmTransaction'
  | undefined;

export interface Transaction {
  transactionHash: string;
  to: string;
  status: TransactionStatus;
  type?: TransactionType;
}

export interface DestinationContracts {
  eth_mainnet: DestinationOption[];
  eth_ropsten: DestinationOption[];
  rsk_mainnet: DestinationOption[];
  rsk_testnet: DestinationOption[];
}

export interface DestinationOption {
  value: string;
  label: string;
}

export type ContractName = keyof INetworkToContract;
