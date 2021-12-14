import { useState, useEffect, useCallback, useRef } from 'react';
import { network } from 'app/containers/BlockChainProvider/network';

export function useGetGasPrice() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('0.065');
  const [onChainValue, setOnChainValue] = useState('0.065');
  const wasChanged = useRef(false);

  useEffect(() => {
    setLoading(true);
    network
      .gasPrice()
      .then(result => {
        if (!wasChanged.current) {
          setValue(String(result));
        }
        setOnChainValue(String(result));
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleChange = useCallback(price => {
    setValue(String(price));
    wasChanged.current = true;
  }, []);

  return { value, onChainValue, loading, set: handleChange };
}
