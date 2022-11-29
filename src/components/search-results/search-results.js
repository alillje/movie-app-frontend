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
  const searchPhrase = useSelector((state) => state.search.searchPhrase)
  const [currentSearchPhrase, setCurrentSearchPhrase] = useState('')
  const [results, setResults] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [prevPage, setPrevPage] = useState(0)
  /**
   *
   */
  const getSearchResults = async () => {
    setPrevPage(0)
    setResults([])
    const searchQuery = `${searchPhrase}&page=${prevPage + 1}`
    const data = await searchTitles(searchQuery)
    const newResults = data.results
    setResults(newResults)
    setPrevPage(data.page)
    setTotalPages(data.total_pages)
  }
  /**
   *
   */
  const loadMore = async () => {
    setIsLoading(true)
    const searchQuery = `${searchPhrase}&page=${prevPage + 1}`
    const data = await searchTitles(searchQuery)
    if (prevPage === data.page - 1) {
      setPrevPage(data.page)
      const newResults = data.results
      setResults([...results, ...newResults])
    } else {
      setPrevPage(data.page - 1)
    }
    setIsLoading(false)
  }

  /**
   *
   *
   * @returns {*}
   */
  useEffect(() => {
    if (searchPhrase !== currentSearchPhrase) {
      setCurrentSearchPhrase(searchPhrase)
      getSearchResults()
    }
  }, [searchPhrase])
  return (
    <div className="searchResultsContainter">
        {results.length ? results.map((title) => {
          const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.poster_path}`
          return (
            <MovieCard key={title.id} movieId={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={true} />
          )
        }) : <h2 className="noSearchResultsContainer">No Results</h2>}
        {isLoading && <div className="serachLoadingDiv">LOADING....</div>}
        <div className="searchLoadMoreButtonWrapper">

{prevPage + 1 < totalPages && <div className="searchLoadMoreButton" onClick={loadMore}><div className="searchLoadMoreText"><h3>Load More</h3></div></div>}
        </div>
        </div>
  )
}
export default SearchResults
