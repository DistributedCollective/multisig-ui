import { DestinationContracts, NetworkName } from './types';

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

export const destinations: DestinationContracts = {
  eth_mainnet: [
    { value: '0xdac17f958d2ee523a2206206994597c13d831ec7', label: 'USDT' },
    { value: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', label: 'USDC' },
  ],
  rsk_mainnet: [
    { value: '0xe700691da7b9851f2f35f8b8182c69c53ccad9db', label: 'DOC' },
    { value: '0xef213441a85df4d7acbdae0cf78004e1e486bb96', label: 'rUSD' },
  ],
  rsk_testnet: [
    { value: '0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0', label: 'tDOC' },
    { value: '0x4D5a316D23eBE168d8f887b4447bf8DbFA4901CC', label: 'tUSDT' },
  ],
};

// Block time in seconds
export const blockTime = 30;
