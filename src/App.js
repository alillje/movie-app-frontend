import './App.css'
import Layout from './components/layout/layout.js'
import Main from './components/main/main.js'
import SearchResults from './components/search-results/search-results.js'
import { useSelector } from 'react-redux'

/**
 *
 */
function App () {
  const isSearching = useSelector((state) => state.search.isSearching)
  return (
    <Layout>
      {!isSearching ? <Main /> : <SearchResults />}
    </Layout>
  )
}

export default App
