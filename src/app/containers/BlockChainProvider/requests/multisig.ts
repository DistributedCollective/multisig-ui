import { network } from '../network';
import { store } from '../../../../store/store';
import { toChecksumAddress } from '../../../../utils/helpers';

export function multisign_submitTransaction(
  destination: string,
  value: string,
  data: string,
) {
  const account = store.getState().blockChainProvider.address;
  return network.send(
    'multiSigWallet',
    'submitTransaction',
    [toChecksumAddress(destination), value, data, { from: account }],
    {
      type: 'submitTransaction',
    },
  );
}
