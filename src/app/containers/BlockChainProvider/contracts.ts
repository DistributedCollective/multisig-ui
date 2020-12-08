import { IContractNetworks } from './types';
import MultiSigWallet from './abi/MultiSigWallet.json';

export const contracts: IContractNetworks = {
  testnet: {
    multiSigWallet: {
      address: '0x09deA2051575994E2B26772C0dC3Fa061AB760B3',
      abi: MultiSigWallet as any,
    },
  },
  mainnet: {
    multiSigWallet: {
      address: '0x08118a219a4e34E06176cD0861fcDDB865771111',
      abi: MultiSigWallet as any,
    },
  },
};
