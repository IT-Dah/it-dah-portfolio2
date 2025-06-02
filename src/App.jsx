import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectArticle from './pages/ProjectArticle'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectArticle />} />
    </Routes>
  )
}
