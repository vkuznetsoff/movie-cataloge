import { useState } from 'react'
import Filter from '../Filter'
import { Preloader } from '../Preloader'
import { Search } from '../Search'
import Catalog from './Catalog'

const Main = ({ cards = [], changeTitle, search, loading }) => {
  const [filter, setFilter] = useState('all')

  const filterCards =
    filter === 'all' ? cards : cards.filter((c) => c.Type === filter)

  return (
    <main className='container content'>
      <Search changeTitle={changeTitle} search={search} filter={filter} />
      <Filter setFilter={setFilter} />
      {loading ? (
        <Preloader />
      ) : filterCards.length ? (
        <Catalog cards={filterCards} />
      ) : (
        <h4>Sorry, there is nothing!</h4>
      )}
    </main>
  )
}

export default Main
