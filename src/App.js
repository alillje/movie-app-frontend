import './App.css'
import Layout from './components/layout/layout.js'
import Home from './pages/home/home.js'
import Discover from './pages/discover/discover.js'

// import SearchResults from './components/search-results/search-results.js'
// import { useSelector } from 'react-redux'
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
      </Routes>
    </HashRouter>
  )
}

export default App
