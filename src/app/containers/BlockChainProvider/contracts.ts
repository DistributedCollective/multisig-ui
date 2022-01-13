import { IContractNetworks } from './types';
import MultiSigWallet from './abi/MultiSigWallet.json';

export const contracts: IContractNetworks = {
  eth_mainnet: {
    multiSigWallet: {
      address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
      abi: MultiSigWallet as any,
    },
  },
  eth_ropsten: {
    multiSigWallet: {
      address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
      abi: MultiSigWallet as any,
    },
  },
  rsk_testnet: {
    multiSigWallet: {
      address: '0x09deA2051575994E2B26772C0dC3Fa061AB760B3',
      abi: MultiSigWallet as any,
    },
  },
  rsk_mainnet: {
    multiSigWallet: {
      address: '0x08118a219a4e34E06176cD0861fcDDB865771111',
      abi: MultiSigWallet as any,
    },
  },
  bsc_testnet: {
    multiSigWallet: {
      address: '0xCc653b64e8f4f2aDEa87490f11d090472E08838A',
      abi: MultiSigWallet as any,
    },
  },
};
