import { Preloader } from '../Preloader'
import { Search } from '../Search'
import Catalog from './Catalog'

const Main = ({ cards, changeTitle }) => {
  return (
    <main className='container content'>
      <Search changeTitle={changeTitle} />
      {!cards.length || !cards ? <Preloader /> : <Catalog cards={cards} />}
    </main>
  )
}

export default Main
