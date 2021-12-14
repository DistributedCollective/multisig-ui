import { network } from '../network';
import { store } from '../../../../store/store';
import { toChecksumAddress } from '../../../../utils/helpers';

export function multisign_submitTransaction(
  destination: string,
  value: string,
  data: string,
  gasPrice: string,
) {
  const account = store.getState().blockChainProvider.address;
  return network.send(
    'multiSigWallet',
    'submitTransaction',
    [toChecksumAddress(destination), value, data, { from: account, gasPrice }],
    {
      type: 'submitTransaction',
    },
  );
}

export function multisign_confirmTransaction(
  transactionId: string,
  gasPrice: string,
) {
  const account = store.getState().blockChainProvider.address;
  return network.send(
    'multiSigWallet',
    'confirmTransaction',
    [transactionId, { from: account, gasPrice }],
    {
      type: 'confirmTransaction',
    },
  );
}
