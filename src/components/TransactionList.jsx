import TransactionItem from './TransactionItem';
import { SearchX } from 'lucide-react';


const TransactionList = ({ transactions, searchWord }) => {
  
  // ÉTAT VIDE : Aucun résultat
  if (searchWord && transactions.length === 0) {

    return (
      <div className="
        flex flex-col items-center justify-center py-16 px-4">
        <div className="bg-gray-50 rounded-full p-6 mb-4 ">
          <SearchX className="h-12 w-12 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Aucune transaction trouvée
        </h3>
        
        <p className="text-gray-500 text-center max-w-md">
          Essayez avec d'autres mots-clés ou vérifiez l'orthographe
        </p>
      </div>
    );
  }
// Affichage des transactions filtrées
  return (
    <div className="w-full max-w-2xl mx-auto">  
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.paymentId}
            transaction={transaction}
            searchWord={searchWord}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;