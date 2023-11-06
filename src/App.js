import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const API_KEY = 'ab43d87b'
const URL = 'http://www.omdbapi.com/?'

function App() {

  const [cards, setCards]  = useState(() => [])

  useEffect(() => {
    fetch(`${URL}apikey=${API_KEY}&s=matrix&page=1`)
    .then(data => data.json())
    .then(data => {
      // console.log('cards1: ', data.Search)
      setCards(data.Search)}
      )
  }, [])

  return (
    <div className="App">
     <Header />
     <Main cards={cards} />
     
     <Footer />

    </div>
  );
}

export default App;
