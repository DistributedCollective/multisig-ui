import { useSelector } from 'react-redux';
import { selectBlockChainProvider } from '../containers/BlockChainProvider/selectors';

export function useAccount() {
  const { address } = useSelector(selectBlockChainProvider);
  return !!address ? address : '';
}
