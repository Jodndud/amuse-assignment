import { Routes, Route } from 'react-router-dom'
import Dashboard from '@/pages/Dashboard'
import DeviceDetail from './pages/DeviceDetail'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/device/:deviceId" element={<DeviceDetail />} />
      </Routes>
    </div>
  )
}

export default App
