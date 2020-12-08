import { BlockChainProviderState } from 'app/containers/BlockChainProvider/types';
import { MultiSigTransactionFormState } from 'app/containers/MultiSigTransactionForm/types';
import { MultiSignConfirmTransactionFormState } from 'app/containers/MultiSignConfirmTransactionForm/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  blockChainProvider?: BlockChainProviderState;
  multiSigTransactionForm?: MultiSigTransactionFormState;
  multiSignConfirmTransactionForm?: MultiSignConfirmTransactionFormState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
