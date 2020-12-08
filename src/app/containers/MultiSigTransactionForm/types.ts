/* --- STATE --- */
export interface MultiSigTransactionFormState {}

export type ContainerState = MultiSigTransactionFormState;

export enum TxType {
  CUSTOM,
  ERC20_TRANSFER,
}

export interface ISubmitTransactionSignature {
  destination: string;
  value: string;
  data: string;
}

export interface IErc20TransferSignature {
  receiver: string;
  amount: string;
}
