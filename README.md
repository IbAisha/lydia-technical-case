#LYDIA TECHNICAL CASE - TEST 


Application React permettant de rechercher et filtrer des transactions Lydia avec une interface moderne et intuitive.


**OBJECTIF**
Créer une SPA (Single Page Application) en React qui permet de :

Rechercher des transactions par leur label
Filtrer en temps réel pendant la saisie
Afficher les résultats


**TECHNOS UTILISÉES**

React 18
Vite
Tailwind CSS
Lucide React

**ARCHITECTURE**
Hook personnalisé : useTransactionSearch
Centralise la logique de recherche et de filtrage :

Gestion de l'état searchTerm
Normalisation des chaînes (minuscules + suppression accents)
Calcul des statistiques (total, résultats, état recherche)

-Composants-

SearchBar : Input de recherche avec icônes et feedback visuel

TransactionItem : Carte pour une transaction

TransactionList : Container de la liste


**DEPLOIEMENT**

Netlify via Github : lydia-technical-case.netlify.app


