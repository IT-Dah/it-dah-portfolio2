import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectArticle from './pages/ProjectArticle'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
