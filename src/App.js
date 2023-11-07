import { useEffect, useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

const API_KEY = 'ab43d87b'
const URL = 'http://www.omdbapi.com/?'

function App() {
  const [cards, setCards] = useState(() => [])
  const [title, setTitle] = useState('matrix')
  useEffect(() => {
    fetch(`${URL}apikey=${API_KEY}&s=${title}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('cards1: ', data.Search)
        setCards(data.Search)
      })
  }, [title])

  return (
    <div className='App'>
      <Header />
      <Main cards={cards} changeTitle={setTitle} />

      <Footer />
    </div>
  )
}

export default App
