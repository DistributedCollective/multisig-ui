import { DestinationContracts, NetworkName } from './types';

export const networkTitles = {
  1: 'Ethereum',
  3: 'Ropsten',
  30: 'RootStock',
  31: 'RSK Testnet',
  56: 'Binance Smart Chain',
  97: 'Smart Chain Testnet',
};

export const networks: { [key: number]: NetworkName } = {
  1: 'eth_mainnet',
  3: 'eth_ropsten',
  30: 'rsk_mainnet',
  31: 'rsk_testnet',
  // 56: 'bsc_mainnet',
  97: 'bsc_testnet',
};

export const rpcNodes = {
  1: 'https://ropsten.infura.io/v3/237d5a5403134af7b7211fd6996c15d3',
  3: 'https://mainnet.infura.io/v3/237d5a5403134af7b7211fd6996c15d3',
  30: 'https://mainnet.sovryn.app/rpc',
  31: 'https://testnet.sovryn.app/rpc',
  56: 'https://bsc-dataseed.binance.org',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
};

export const wssNodes = {
  1: 'wss://mainnet.infura.io/ws/v3/237d5a5403134af7b7211fd6996c15d3',
  3: 'wss://ropsten.infura.io/ws/v3/237d5a5403134af7b7211fd6996c15d3',
  30: 'wss://mainnet.sovryn.app/websocket',
  31: 'wss://testnet.sovryn.app/websocket',
  56: 'wss://bsc-ws-node.nariox.org:443',
};

export const blockExplorers = {
  1: 'https://etherscan.io',
  3: 'https://ropsten.etherscan.io',
  30: 'https://explorer.rsk.co',
  31: 'https://explorer.testnet.rsk.co',
  56: 'https://bscscan.com',
  97: 'https://testnet.bscscan.com',
};

export const destinations: DestinationContracts = {
  eth_mainnet: [
    { value: '0xdac17f958d2ee523a2206206994597c13d831ec7', label: 'USDT' },
    { value: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', label: 'USDC' },
    { value: '0x6B175474E89094C44Da98b954EedeAC495271d0F', label: 'DAI' },
  ],
  eth_ropsten: [
    {
      value: '0x098256E09f04955BCF15d4B7FB018A34bB5C03CB',
      label: 'Test Token',
    },
  ],
  rsk_mainnet: [
    { value: '0xe700691da7b9851f2f35f8b8182c69c53ccad9db', label: 'DOC' },
    { value: '0xef213441a85df4d7acbdae0cf78004e1e486bb96', label: 'rUSD' },
  ],
  rsk_testnet: [
    { value: '0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0', label: 'tDOC' },
    { value: '0x4D5a316D23eBE168d8f887b4447bf8DbFA4901CC', label: 'tUSDT' },
  ],
  bsc_testnet: [],
};

// Block time in seconds
export const blockTime = 30;
