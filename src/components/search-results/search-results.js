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
  const [currentSearchPhrase, setCurrentSearchPhrase] = useState('')
  // const currentPage = useSelector((state) => state.search.currentPage)
  const [results, setResults] = useState([])

  // window.addEventListener('scroll', (event) => infiniteScroll(event))
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
  }
  /**
   *
   */
  const loadMore = async () => {
    console.log('test')
    setIsLoading(true)
    document.documentElement.scrollTop = document.documentElement.scrollHeight

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
   * @param event
   */
  // const infiniteScroll = async (event) => {
  //   const bottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight < 50

  //   if (bottom) {
  //     event.preventDefault()
  //     loadMore()
  //     // document.documentElement.scrollTop = document.documentElement.scrollHeight

  //     // setTimeout(() => {
  //     //   setScrollabe(false)
  //     // }, 10000)
  //   }
  // }

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
          // console.log(title.id, title.original_title)
          return (
            <MovieCard key={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={true} />
          )
        }) : <h2 className="noSearchResultsContainer">No Results</h2>}
        {isLoading && <div className="serachLoadingDiv">LOADING....</div>}
        <div className="searchLoadMoreButtonWrapper">
        <div className="searchLoadMoreButton" onClick={loadMore}><div className="searchLoadMoreText"><h3>Load More</h3></div></div>
        </div>
        </div>
  )
}
export default SearchResults
