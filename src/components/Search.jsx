import { useState } from 'react'

export const Search = ({ changeTitle }) => {
  const [input, setInput] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      changeTitle(input)
      console.log('input', input)
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
          {/* <label for='email_inline'>Email</label> */}
          {/* <span className='helper-text' data-error='wrong' data-success='right'>
            Helper text
          </span> */}
        </div>
      </div>
    </div>
  )
}
