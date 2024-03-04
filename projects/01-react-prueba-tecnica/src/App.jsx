import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANSOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // fetching de datos utilizando useEffect

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANSOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // obtener la primera palabra del fact ----> const firstWord = fact.split(' ')[0]

        // obtener las primeras 3 palabras del fact
        const firstThreeWords = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords)

        fetch(`${CAT_ENDPOINT_IMAGE_URL}${firstThreeWords}`)
          .then(response => {
            const url = response.url
            setImageUrl(url)
          })
      })
  }, [])

  return (
    <>
      <h1>Ramdom Cats App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first words for: ${fact}`} />}
    </>
  )
}
