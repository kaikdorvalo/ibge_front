import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { RankingLocationPage } from './pages/ranking_location/RankingLocationPage'

function App() {

  return (
    <Routes>
      <Route path="/ranking" element={<HomePage />} />,
      <Route path="/ranking_location" element={<RankingLocationPage />} />,
    </Routes>
  )
}

export default App
