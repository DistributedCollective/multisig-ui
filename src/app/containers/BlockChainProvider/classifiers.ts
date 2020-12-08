import { NetworkName } from './types';

export const networkTitles = {
  1: 'Ethereum',
  30: 'RootStock',
  31: 'RSK Testnet',
};

export const networks: { [key: number]: NetworkName } = {
  1: 'eth_mainnet',
  30: 'rsk_mainnet',
  31: 'rsk_testnet',
};

export const rpcNodes = {
  1: 'https://mainnet.infura.io/v3/237d5a5403134af7b7211fd6996c15d3',
  30: 'https://mainnet.sovryn.app/rpc',
  31: 'https://testnet.sovryn.app/rpc',
};

export const wssNodes = {
  1: 'wss://mainnet.infura.io/ws/v3/237d5a5403134af7b7211fd6996c15d3',
  30: 'wss://mainnet.sovryn.app/ws',
  31: 'wss://testnet.sovryn.app/ws',
};

export const blockExplorers = {
  1: 'https://etherscan.io',
  30: 'https://explorer.rsk.co',
  31: 'https://explorer.testnet.rsk.co',
};

// Block time in seconds
export const blockTime = 30;
