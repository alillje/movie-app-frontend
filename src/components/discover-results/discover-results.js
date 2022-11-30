import './discover-results.css'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { getCategories, getSingleCategory } from '../../services/fetch-service.js'
import MovieCard from '../moive-card/movie-card.js'

/**
 * Search Results Component.
 *
 * @param {object} props - *
 * @param {string} props.title - The title of the page.
 * @returns {React.ReactElement} - Search Results Component.
 */
const DiscoverResults = ({ title }) => {
  const [categories, setCategories] = useState([])
  const [results, setResults] = useState([])
  const [currentCategory, setCurrentCategory] = useState(null)
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [prevPage, setPrevPage] = useState(0)

  /**
   * Gets the category of the choosen category.
   *
   * @param {object} event - An event object.
   */
  const getCategoryResults = async (event) => {
    setIsLoading(true)
    setButtonActive(event.target.id)
    setCurrentCategory(event.target.id)
    setPrevPage(0)
    const data = await getSingleCategory(`{${event.target.value}&page=${prevPage + 1}`)
    const newResults = data.results
    setResults(newResults)
    setPrevPage(data.page)
    setTotalPages(data.total_pages)
    setIsLoading(false)
  }

  /**
   * Loads more (the next page) of the results.
   */
  const loadMore = async () => {
    const data = await getSingleCategory(`{${currentCategory}&page=${prevPage + 1}`)
    if (prevPage === data.page - 1) {
      setPrevPage(data.page)
      const newResults = data.results
      setResults([...results, ...newResults])
    } else {
      setPrevPage(data.page - 1)
    }
  }

  /**
   * Sets the choosen category button to active.
   *
   * @param {string} buttonId - HTML Id identifier.
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
   * Gets and sets all the categories/genres.
   */
  const getAllCategories = async () => {
    const cats = await getCategories()
    setCategories(cats.genres)
  }

  /**
   * React useEffect Hook.
   */
  useEffect(() => {
    getAllCategories()
  }, [results])

  return (
    <div className="discoverResultsContainer">
      <h1 className="discoverPageTitle">{title}</h1>
      <div className="discoverButtonsWrapper">
<div className="discoverButtons">
{categories.length && categories.map((category) => {
  return (
    <button key={category.id} id={category.id} value={category.id} onClick={(event) => getCategoryResults(event)} className="discoverCategoryButton">{category.name}</button>
  )
})}
</div>
</div>
{isLoading ? <div className="discoverLoadingSpinnerWrapper"><div className="discoverLoadingSpinner"></div></div> : <div className="discoverResults">
{results.length ? results.map((title) => {
  const imageUrl = `${process.env.REACT_APP_IMAGES_URL}/original${title.poster_path}`
  return (
            <MovieCard key={title.id} movieId={title.id} originalTitle={title.original_title} releaseDate={title.release_date} imageUrl={imageUrl} poster={true} />
  )
}) : <div className="discoverNoCategoryMessage"><h1>Pick a category to start browsing</h1></div>}
</div>}
{prevPage + 1 < totalPages && !isLoading && <div className="discoverLoadMoreButtonWrapper"><div className="discoverLoadMoreButton" onClick={loadMore}><div className="discoverLoadMoreText"><h3>Load More</h3></div></div></div>
}
        </div>
  )
}
export default DiscoverResults
