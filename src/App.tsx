import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'

function App() {
  return (
    <div className='container mx-auto px-4 sm:px-0'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
