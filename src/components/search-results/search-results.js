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
  // const isSearching = useSelector((state) => state.search.isSearching)
  const searchPhrase = useSelector((state) => state.search.searchPhrase)
  const [results, setResults] = useState([])
  window.addEventListener('scroll', (event) => infiniteScroll(event))

  const [page, setPage] = useState(1)
  // const [isLoading, setIsLoading] = useState(false)
  /**
   *
   */
  const getSearchResults = async () => {
    // setIsLoading(true)
    console.log(page)
    const searchQuery = `${searchPhrase}&page=${page}`
    const data = await searchTitles(searchQuery)
    const newResults = data.results
    setResults([...results, ...newResults])
    setPage(page + 1)
  }

  /**
   *
   */
  const infiniteScroll = async (event) => {
    const bottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight < 800
    if (bottom) {
      getSearchResults()
    }
  }

  /**
   *
   *
   * @returns {*}
   */
  useEffect(() => {
    searchPhrase && getSearchResults()
  }, [searchPhrase])
  return (
    <div className="searchResultsContainter" onScroll={event => infiniteScroll(event)}>
        {results.length ? results.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.poster_path}`
          return (
            <MovieCard key={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} />
          )
        }) : <h2 className="noSearchResultsContainer">No Results</h2>}
        </div>
  )
}
export default SearchResults
