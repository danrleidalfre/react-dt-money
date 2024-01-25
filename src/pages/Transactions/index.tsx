import { Header } from '../../components/Header'
import { Summary } from '../Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles.ts'
import { SearchForm } from './components/SearchForms'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext.tsx'
import { dateFormatter, priceFormatter } from '../../utils/formatter.ts'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <main>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </main>
  )
}
