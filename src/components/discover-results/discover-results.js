import './search-results.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { searchTitles } from '../../services/fetch-service.js'
// import MovieCard from '../moive-card/movie-card.js'

/**
 * Search Results Component.
 *
 * @returns {React.ReactElement} - Search Results Component.
 */
const DiscoverResults = () => {
  // const isSearching = useSelector((state) => state.search.isSearching)
  const searchPhrase = useSelector((state) => state.search.searchPhrase)
  const [results, setResults] = useState([])

  const [isLoading, setIsLoading] = useState(false)
  const [prevPage, setPrevPage] = useState(0)
  /**
   *
   */
  const getDiscoverResults = async () => {
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
   *
   * @returns {*}
   */
  useEffect(() => {
    getDiscoverResults()
  }, [category])
  return (
    <div className="discoverResultsContainer">

        </div>
  )
}
export default DiscoverResults
