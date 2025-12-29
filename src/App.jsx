import SearchBar from "./components/SearchBar";
import transactionsData from "../data/transactions.json";
import TransactionList from "./components/TransactionList";
import { useTransactionSearch } from "../hooks/useTransactionSearch";
import Header from "./components/Header";


function App() {

  const {
    searchWord,setSearchWord,
    filteredTransactions,
    resultCount,
  } = useTransactionSearch(transactionsData);

  return (  
    <div>
      <div className="min-h-screen bg-white-100 p-6">
        <Header/>
        <div className="max-w-3xl mx-auto">
          <SearchBar
            searchWord={searchWord}
            onSearchChange={setSearchWord}
            resultCount={resultCount}
          />

          <TransactionList
            transactions={filteredTransactions}
            searchWord={searchWord}
          />
        </div>
      </div>

      <footer className="mt-16 py-6 text-center text-sm text-gray-500">
        <p>Lydia Technical Test - Ibrahima Aïcha - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;