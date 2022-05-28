import React from 'react'

const QuoteBox = ({quotesRandom, colorsRandom, setChangePhrase, changePhrase}) => { 



  return (
    <div className='container-quotes'>
        <p className='quote' style={{color: `${colorsRandom}`}}>{quotesRandom.quote}</p>
        <div className='container-end'>
        <p className='author' style={{color: `${colorsRandom}`}}>{quotesRandom.author}</p>
        <button className='quote-btn' style={{backgroundColor: `${colorsRandom}`}} onClick={() => setChangePhrase(changePhrase + 1)}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
    </div> // en el button hicimos un scoope porque si no la pagina se recargaba sola infinitas veces.
  )
}

export default QuoteBox