import { useState, useMemo } from 'react';
import { filterTransactions } from '../src/utils/searchUtils';

export const useTransactionSearch = (transactions) => {
  const [searchWord, setSearchWord] = useState('');

  const filteredTransactions = filterTransactions(
    transactions, 
    searchWord
  );

  return {
    searchWord,
    setSearchWord,
    filteredTransactions,
    resultCount: filteredTransactions.length,
  };
};
