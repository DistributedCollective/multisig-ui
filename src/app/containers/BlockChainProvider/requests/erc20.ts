import Web3 from 'web3';
import { toChecksumAddress } from 'utils/helpers';
import jsonInterface from '../abi/ERC20Token.json';

const web3 = new Web3();

export function er20_transfer_abi(receiver: string, amount: string) {
  const contract = new web3.eth.Contract(jsonInterface as any);
  return contract.methods
    .transfer(toChecksumAddress(receiver), amount)
    .encodeABI();
}
