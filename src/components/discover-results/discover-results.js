import './discover-results.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { getCategories } from '../../services/fetch-service.js'
// import MovieCard from '../moive-card/movie-card.js'

/**
 * Search Results Component.
 *
 * @returns {React.ReactElement} - Search Results Component.
 */
const DiscoverResults = () => {
  const [categories, setCategories] = useState([])
  // const [results, setResults] = useState([])

  // const [isLoading, setIsLoading] = useState(false)
  // const [prevPage, setPrevPage] = useState(0)
  // /**
  //  *
  //  */
  // const getDiscoverResults = async () => {
  //   setPrevPage(0)
  //   setResults([])
  //   const searchQuery = `${category}&page=${prevPage + 1}`
  //   const data = await searchTitles(searchQuery)
  //   const newResults = data.results
  //   setResults(newResults)
  //   setPrevPage(data.page)
  // }
  // /**
  //  *
  //  */
  // const loadMore = async () => {
  //   console.log('test')
  //   setIsLoading(true)
  //   document.documentElement.scrollTop = document.documentElement.scrollHeight

  //   const searchQuery = `${searchPhrase}&page=${prevPage + 1}`
  //   const data = await searchTitles(searchQuery)
  //   if (prevPage === data.page - 1) {
  //     setPrevPage(data.page)
  //     const newResults = data.results
  //     setResults([...results, ...newResults])
  //   } else {
  //     setPrevPage(data.page - 1)
  //   }
  //   setIsLoading(false)
  // }

  /**
   *
   */
  const getAllCategories = async () => {
    const cats = await getCategories()
    setCategories(cats.genres)
  }

  /**
   *
   *
   * @returns {*}
   */
  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className="discoverResultsContainer">
<div className="discoverButtons">
{categories.length && categories.map((category) => {
  return (
    <div key={category.id} value={category.id} className="discoverCategoryButton">{category.name}</div>
  )
})}
</div>
        </div>
  )
}
export default DiscoverResults
