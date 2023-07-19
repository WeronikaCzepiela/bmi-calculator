import './App.scss'
import { Header } from './components/Header/Header'
import { Middle } from './components/Middle/Middle'
import { Accounts } from './components/Accounts/Accounts'

export const App = () => {
  return (
    <div className={'App'}>
      <Header />
      <Middle />
      <Accounts />
    </div>
  )
}

export default App