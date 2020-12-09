import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { toChecksumAddress } from 'utils/helpers';
import jsonInterface from '../abi/ERC20Token.json';
import { network } from '../network';
import { bignumber } from 'mathjs';

const web3 = new Web3();

const tokenContracts: { [key: string]: Contract } = {};
const tokenDecimals: { [key: string]: number } = {};

function getTokenContract(token: string) {
  if (!tokenContracts.hasOwnProperty(token)) {
    tokenContracts[token] = new network.web3.eth.Contract(
      jsonInterface as any,
      token,
    );
  }
  return tokenContracts[token];
}

async function getTokenDecimals(token: string, contract: Contract) {
  if (!tokenDecimals.hasOwnProperty(token)) {
    tokenDecimals[token] = await contract.methods.decimals().call();
  }
  return Number(tokenDecimals[token]);
}

export async function er20_transfer_abi(
  token: string,
  receiver: string,
  amount: string,
) {
  if (!token) {
    return '0x';
  }
  try {
    const contract = getTokenContract(token);
    const decimals = await getTokenDecimals(token, contract);
    return contract.methods
      .transfer(
        toChecksumAddress(receiver),
        bignumber(amount)
          .mul(10 ** decimals)
          .toFixed(0),
      )
      .encodeABI();
  } catch (e) {
    console.error(e);
    return '0x';
  }
}

export function er20_transfer_abi_decode(data) {
  try {
    const signature = web3.eth.abi.encodeFunctionSignature(
      'transfer(address,uint256)',
    );
    const da = data.substr(signature.length);
    return {
      signature,
      data: da,
      decoded: web3.eth.abi.decodeParameters(
        ['address', 'uint256'],
        data.substr(signature.length),
      ),
    };
  } catch (e) {
    console.error(e);
    return null;
  }
}
