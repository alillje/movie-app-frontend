import './search-results.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { searchTitles } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'

/**
 * Search Results Component.
 *
 * @returns {React.ReactElement} - Search Results Component.
 */
const SearchResults = () => {
  const isSearching = useSelector((state) => state.search.isSearching)
  const searchPhrase = useSelector((state) => state.search.searchPhrase)
  const [results, setResults] = useState([])

  /**
   *
   */
  const getSearchResults = async () => {
    const data = await searchTitles(searchPhrase)
    const results = data.results
    console.log(data.results)
    setResults(results)
  }
  /**
   *
   *
   * @returns {*}
   */
  useEffect(() => {
    isSearching && getSearchResults()
  }, [searchPhrase])
  return (
    <div className="searchResultsContainter">
        {results.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.poster_path}`
          return (

                    <MovieCard key={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} />
          )
        })}    </div>
  )
}
export default SearchResults
