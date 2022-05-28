import { useEffect, useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotess from './json/quotes.json'


const arrayColors = [
  '#E77012','#543FE6','#CC928E','#AD3224','#94C2F2',
  '#E4B1C2','#4BD071','#100EF2','#6D2C8B','#3CDCFD',
  '#EB662E','#D8DBA0','#D30740','#AE41E6','#6E849F',
  '#58A7CA','#2A0C1A','#F1FB95','#41B6DE','#C262AF'
]

function App() {
  
  const randomPosition = array => {
    return Math.floor(Math.random() * array.length)
  }

  const [quotesRandom, setQuotesRandom] = useState({}) // aca recibe los objetos de json.
  
  const[colorsRandom, setColorsRandom] = useState('') // aca recibimos los colores.

  const[changePhrase, setChangePhrase] = useState(0) // el button empieza en 0 y luego le vamos sumando 1 en QuoteBox para que cambie.

  useEffect(() => {
  
    let randomPositionOfPhrase = randomPosition(quotess)  // guardamos las posiciones random en una variable
    let randomPositionOfColors = randomPosition(arrayColors) // guardamos las posiciones random en una variable

    setQuotesRandom(quotess[randomPositionOfPhrase])         //aca cambiamos los estados
    setColorsRandom(arrayColors[randomPositionOfColors])    //aca cambiamos los estados
  
  }, [changePhrase])
  
  const appStyle = {
    backgroundColor: colorsRandom
  }
  
  return (
    <div className="App" style={appStyle}>

      <QuoteBox 
      quotesRandom={quotesRandom}
      colorsRandom={colorsRandom}
      setChangePhrase={setChangePhrase}
      changePhrase={changePhrase}
      />

    </div>
  )
}

export default App
