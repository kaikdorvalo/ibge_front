import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { RankingLocationPage } from './pages/ranking_location/RankingLocationPage'
import { ComparisonPage } from './pages/comparison/ComparisonPage'

function App() {

  return (
    <Routes>
      <Route path="/ranking" element={<HomePage />} />,
      <Route path="/ranking_location" element={<RankingLocationPage />} />,
      <Route path="/name_comparison" element={<ComparisonPage />} />,
    </Routes>
  )
}

export default App
