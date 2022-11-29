import './App.css'
import Layout from './components/layout/layout.js'
import Home from './pages/home/home.js'
import Discover from './pages/discover/discover.js'
import Movie from './pages/movie/movie.js'
import Error from './pages/error/error.js'
import { useSelector } from 'react-redux'
import { HashRouter, Routes, Route } from 'react-router-dom'
import SearchResults from './components/search-results/search-results.js'
/**
 *
 */
function App () {
  const isSearching = useSelector((state) => state.search.isSearching)
  return (
      // <Layout>
      //   {!isSearching ? <Main /> : <SearchResults />}
      // </Layout>
      <HashRouter>
        <Routes>
      <Route
        exact
        path='/'
        element={<Layout>{!isSearching ? <Home /> : <SearchResults />}</Layout>}
      />
      <Route
        exact
        path='/discover'
        element={<Layout>{!isSearching ? <Discover /> : <SearchResults />}</Layout>}
      />
            <Route
        exact
        path='/movie/:id'
        element={<Layout>{!isSearching ? <Movie /> : <SearchResults />}</Layout>}
      />
                  <Route
        path='*'
        element={<Layout><Error message="Oops! We couldn't find that page"></Error></Layout>}
      />
      </Routes>
    </HashRouter>
  )
}

export default App
