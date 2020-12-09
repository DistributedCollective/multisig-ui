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
