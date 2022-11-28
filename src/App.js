import './App.css'
import Layout from './components/layout/layout.js'
import Home from './pages/home/home.js'
import Discover from './pages/discover/discover.js'
import Movie from './pages/movie/movie.js'

import { HashRouter, Routes, Route } from 'react-router-dom'

/**
 *
 */
function App () {
  // const isSearching = useSelector((state) => state.search.isSearching)
  return (
      // <Layout>
      //   {!isSearching ? <Main /> : <SearchResults />}
      // </Layout>
      <HashRouter>
        <Routes>
      <Route
        exact
        path='/'
        element={<Layout><Home /></Layout>}
      />
      <Route
        exact
        path='/discover'
        element={<Layout><Discover /></Layout>}
      />
            <Route
        exact
        path='/movie/:id'
        element={<Layout><Movie /></Layout>}
      />
      </Routes>
    </HashRouter>
  )
}

export default App
