import { useState } from 'react'
import '../index.css'

const Filter = ({ setFilter }) => {
  const handleFilter = (e) => {
    setFilter(e.target.dataset.type)
  }
  return (
    // <form className='filter-form' action='#'>
    //   <p>
    //     <label>
    //       <input type='radiobutton' class='filled-in' />
    //       <span>Films</span>
    //     </label>
    //   </p>

    //   <p>
    //     <label>
    //       <input type='checkbox' class='filled-in' />
    //       <span>Serialsn</span>
    //     </label>
    //   </p>

    //   <p>
    //     <label>
    //       <input type='checkbox' class='filled-in' />
    //       <span>Games</span>
    //     </label>
    //   </p>
    // </form>
    <div className='filter-form'>
      <label>
        <input
          className='with-gap'
          name='group3'
          type='radio'
          data-type='all'
          onChange={(e) => handleFilter(e)}
        />
        <span>All</span>
      </label>

      <label>
        <input
          className='with-gap'
          name='group3'
          type='radio'
          data-type='movie'
          onChange={(e) => handleFilter(e)}
        />
        <span>Movies</span>
      </label>

      <label>
        <input
          className='with-gap'
          name='group3'
          type='radio'
          data-type='series'
          onChange={(e) => handleFilter(e)}
        />
        <span>Series</span>
      </label>

      <label>
        <input
          className='with-gap'
          name='group3'
          type='radio'
          data-type='game'
          onChange={(e) => handleFilter(e)}
        />
        <span>Game</span>
      </label>
    </div>
  )
}

export default Filter
