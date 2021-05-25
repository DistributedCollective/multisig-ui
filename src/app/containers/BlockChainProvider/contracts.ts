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
      address: '0x37A706259F5201C03f6Cb556A960F30F86842d01',
      abi: MultiSigWallet as any,
    },
  },
};
