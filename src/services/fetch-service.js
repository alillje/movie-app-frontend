/**
 *
 * @param params
 */
export const getTitles = async (params) => {
  const url = `${process.env.REACT_APP_API_URL}${params}?api_key=${process.env.REACT_APP_API_KEY}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    console.log(e)
  }
}

/**
 *
 * @param searchPhrase
 */
export const searchTitles = async (searchPhrase) => {
  const url = `${process.env.REACT_APP_API_URL}3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchPhrase}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    console.log(e)
  }
}
