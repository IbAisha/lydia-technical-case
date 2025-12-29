// Normaliser pour la recherche (enlever accents, minuscules)
const normalizeString = (str) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  };
  
  export const filterTransactions = (transactions, searchWord) => {
    if (!searchWord.trim()) {
      return transactions;
    }
  
    const normalizedSearch = normalizeString(searchWord);
  
    return transactions.filter((transaction) => {
      const normalizedLabel = normalizeString(transaction.label);
      return normalizedLabel.includes(normalizedSearch);
    });
  };