import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:post_id' element={<PostPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
