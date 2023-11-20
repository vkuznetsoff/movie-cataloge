import { useState } from 'react'
import '../index.css'

export const Search = ({ changeTitle, search, filter }) => {
  const [input, setInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      changeTitle(input)
      search(input, filter)
    }
  }

  return (
    <div className='row'>
      <div className='col s12'>
        Введите название фильма:
        <div className='input-field'>
          <input
            placeholder='search'
            type='search'
            className='validate'
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <button
            className='waves-effect waves-light btn-small search-btn'
            onClick={() => {
              changeTitle(input)
              search(input, filter)
            }}
          >
            Search
          </button>
          {/* <label for='email_inline'>Email</label> */}
          {/* <span className='helper-text' data-error='wrong' data-success='right'>
            Helper text
          </span> */}
        </div>
      </div>
    </div>
  )
}
