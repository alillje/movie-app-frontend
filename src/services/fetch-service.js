/**
 * Fetch service module
 * Handles the calls to the API.
 * All methods returns undefined if error occurs, component error handling.
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

/**
 * Gets titles based on params
 *
 * @param {string} params - The parameters to input to the API-call.
 * @returns {object} - The recieved json data object.
 */
export const getTitles = async (params) => {
  const url = `${process.env.REACT_APP_API_URL}${params}?api_key=${process.env.REACT_APP_API_KEY}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    return undefined
  }
}

/**
 * Gets titles based on search phrase.
 *
 * @param {string} searchPhrase - The search phrase to input to the API-call.
 * @returns {object} - The recieved json data object.
 */
export const searchTitles = async (searchPhrase) => {
  const url = `${process.env.REACT_APP_API_URL}3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchPhrase}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    return undefined
  }
}

/**
 * Gets all movie categories.
 *
 * @returns {Array} The categories.
 */
export const getCategories = async () => {
  const url = `${process.env.REACT_APP_API_URL}3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  try {
    const response = await fetch(url)
    const categories = await response.json()
    return categories
  } catch (e) {
    return undefined
  }
}

/**
 * Gets movies based on category.
 *
 * @param {string} categoryId - The id of the category to input to the API-call.
 * @returns {object} - The recieved json data object.
 */
export const getSingleCategory = async (categoryId) => {
  const url = `${process.env.REACT_APP_API_URL}3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&genre=${categoryId}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (e) {
    return undefined
  }
}

/**
 * Gets data for a specific movie.
 *
 * @param {string} movieId - The id of the movie to input to the API-call.
 * @returns {object} - The recieved json data object.
 */
export const getSingleMovie = async (movieId) => {
  const url = `${process.env.REACT_APP_API_URL}3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    if (response.ok) {
      return json
    }
  } catch (e) {
    return undefined
  }
}

/**
 * Gets the trailer for a specific movie.
 *
 * @param {string} movieId - The id of the movie to input to the API-call.
 * @returns {object} - The recieved json data object.
 */
export const getMovieTrailer = async (movieId) => {
  const url = `${process.env.REACT_APP_API_URL}3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`
  try {
    const response = await fetch(url)
    const json = await response.json()
    const videoId = json.results[0].key
    if (response.ok) {
      return videoId
    }
  } catch (e) {
    return undefined
  }
}
