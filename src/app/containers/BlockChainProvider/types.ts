import { AbiItem } from 'web3-utils';

/* --- STATE --- */
export interface BlockChainProviderState {
  network: NetworkName;
  chainId: ChainId;
  setupCompleted: boolean;
  connected: boolean;
  connecting: boolean;
  address: string;
  governanceContractConfig: GovernanceContractConfig;
  blockNumber: number;
  syncBlockNumber: number;
  transactionStack: string[];
  transactions: Transactions;
  showTransactions: boolean;
}

export type NetworkName = keyof IContractNetworks;
export type ChainId = 30 | 31;

export type ContainerState = BlockChainProviderState;

export interface IContractNetworks {
  mainnet: INetworkToContract;
  testnet: INetworkToContract;
}

export interface INetworkToContract {
  multiSigWallet: IContract;
}

export interface IContract {
  address: string;
  abi: AbiItem[] | AbiItem;
}

export interface GovernanceContractConfig {
  proposalMaxOperations: number;
  votingDelay: number;
  votingPeriod: number;
  proposalThreshold: number;
  quorumVotes: number;
}

export interface Transactions {
  [transactionHash: string]: Transaction;
}

export type TransactionStatus = 'pending' | 'confirmed' | 'failed';
export type TransactionType = 'submitTransaction' | undefined;

export interface Transaction {
  transactionHash: string;
  to: string;
  status: TransactionStatus;
  type?: TransactionType;
}

export type ContractName = keyof INetworkToContract;