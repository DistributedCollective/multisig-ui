import { IContractNetworks } from './types';
import MultiSigWallet from './abi/MultiSigWallet.json';

export const contracts: IContractNetworks = {
  testnet: {
    multiSigWallet: {
      address: '0x189ecD23E9e34CFC07bFC3b7f5711A23F43F8a57',
      abi: MultiSigWallet as any,
    },
  },
  mainnet: {
    multiSigWallet: {
      address: '0x189ecD23E9e34CFC07bFC3b7f5711A23F43F8a57',
      abi: MultiSigWallet as any,
    },
  },
};
