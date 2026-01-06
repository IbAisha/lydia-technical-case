import { ArrowRight, Clock, CheckCircle, XCircle } from 'lucide-react';


const TransactionItem = ({ transaction }) => {  
   // timestamp au format date fr
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('fr-FR', {
      day: 'numeric',  
      month: 'long',      
      year: 'numeric'      
    });
  };

   // STATUT DES TRANSACTIONS
  const getStatusColor = (status) => {
    const colors = {
      completed: 'text-green-700 bg-green-50',
      pending: 'text-orange-700 bg-orange-50',
      canceled: 'text-red-700 bg-red-50'
    };
    return colors[status] || 'text-gray-700 bg-gray-50 border-gray-200';
  };

  // Statut en français
  const getStatusLabel = (status) => {
    const labels = {
      completed: 'Terminée',
      pending: 'En attente',
      canceled: 'Annulée'
    };
    return labels[status] || status;
  };

   // Format des noms
  const formatName = (firstname, lastname) => {
    if (!lastname) {
      return firstname;
    }
    return `${firstname} ${lastname}`;
  };

  // Recupération du nom de l'envoyeur et du receveur
  const receiverName = formatName(
    transaction.receiverFirstname, 
    transaction.receiverLastname
  );
  const senderName = formatName(
    transaction.firstname, 
    transaction.lastname
  );


  //  Icones des status
  const StatusIcon = () => {
    switch (transaction.status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-600" />; 
      case 'canceled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="
      bg-white                 
      rounded-2xl                  
      p-5                         
      shadow-sm                 
      hover:shadow-md              
      transition-all duration-200   
      border border-gray-100        
      hover:border-gray-200         
    ">
      
      {/* Container */}
      <div className="flex items-start justify-between gap-4">

        {/*Transaction*/}
        <div className="flex-1 min-w-0">
          
          {/* Label */}
          <h3 className="
            text-md                    
            font-semibold              
            text-gray-900               
            mb-1                            
            group-hover:text-blue-600   
            transition-colors          
          ">
            {transaction.label}
          </h3>

          {/* sender vers receiver*/}
          <p className="text-sm text-gray-600 mb-2 flex flex-wrap md:flex-nowrap items-center gap-1.5"> 
            {senderName}
            <ArrowRight className="h-4 w-4 flex-shrink-0 text-gray-400" />
            {receiverName}
          </p>

          {/*  date  */}
          <p className="text-xs text-gray-500">
            {formatDate(transaction.date)}
          </p>
        </div>
      
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          
         {/*mMontant de la transaction*/}
          <span className="text-xl font-bold text-gray-900">
            {transaction.amount}
          </span>

          {/* badge statut*/}
          <div className={`
            flex items-center gap-1    
            px-2 py-1 sm:px-3 sm:py-1.5               
            rounded-full                
            border                   
            text-[10px] sm:text-xs 
            font-medium 
            ${getStatusColor(transaction.status)}
          `}>
            <StatusIcon />
            {getStatusLabel(transaction.status)}
            
          </div>
        </div>
      </div>

      {/*Message d'erreur du statut */}
      {transaction.status === 'canceled' && transaction.statusErrorDisplay && (
        // Affiche seulement si status = "canceled" ET qu'il y a un message
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-red-600 italic">
            {transaction.statusErrorDisplay}
          </p>
        </div>
      )}
    </div>
  );
};

export default TransactionItem;