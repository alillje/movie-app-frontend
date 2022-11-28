import './discover-results.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { getCategories, getSingleCategory } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'

/**
 * Search Results Component.
 *
 * @param root0
 * @param root0.title
 * @returns {React.ReactElement} - Search Results Component.
 */
const DiscoverResults = ({ title }) => {
  const [categories, setCategories] = useState([])
  const [results, setResults] = useState([])

  // const [isLoading, setIsLoading] = useState(false)
  // const [prevPage, setPrevPage] = useState(0)
  /**
   *
   * @param event
   */
  const getCategoryResults = async (event) => {
    setButtonActive(event.target.id)
    // setPrevPage(0)
    const data = await getSingleCategory(event.target.value)
    const newResults = data.items
    setResults(newResults)
    // setPrevPage(data.page)
  }
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
   * @param {*} buttonId
   */
  const setButtonActive = (buttonId) => {
    const allButtons = document.querySelectorAll('.discoverCategoryButton')
    for (const button of allButtons) {
      button.style.backgroundColor = 'inherit'
      button.style.color = '#ffffff'
    }
    const activeButton = document.getElementById(buttonId)
    activeButton.style.backgroundColor = '#ffffff'
    activeButton.style.color = '#000000'
  }
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
      <h1>{title}</h1>
<div className="discoverButtons">
{categories.length && categories.map((category) => {
  return (
    <button key={category.id} id={category.id} value={category.id} onClick={(event) => getCategoryResults(event)} className="discoverCategoryButton">{category.name}</button>
  )
})}
</div>
<div className="discoverResults">
{results.length ? results.map((title) => {
  const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.poster_path}`
  return (
            <MovieCard key={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={true} />
  )
}) : <div className="discoverNoCategoryMessage"><h1>Pick a category to start browsing</h1></div>}
</div>
        </div>
  )
}
export default DiscoverResults
