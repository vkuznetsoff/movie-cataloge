import { useEffect, useState } from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

const API_KEY = 'ab43d87b'
const URL = 'http://www.omdbapi.com/?'

function App() {
  const [cards, setCards] = useState(() => [])
  const [title, setTitle] = useState('matrix')
  const [loading, setLoading] = useState(true)

  const search = (title, type = 'all') => {
    const requestType = type !== 'all' ? `&type=${type}` : ``

    fetch(`${URL}apikey=${API_KEY}&s=${title}&page=1${requestType}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log('cards1: ', data.Search)
        setCards(data.Search)
        setLoading(false)
      })
  }
  useEffect(() => {
    search(title)
  }, [title])

  return (
    <div className='App'>
      <Header />
      <Main
        cards={cards}
        changeTitle={setTitle}
        search={search}
        loading={loading}
      />

      <Footer />
    </div>
  )
}

export default App
