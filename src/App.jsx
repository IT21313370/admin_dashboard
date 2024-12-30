import { Routes, Route } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/productsPage'
import Sidebar from './components/Sidebar'

function App() {
 

  return (
    <div className='flex h-screen bg-gray-900 overflow-hidden'>

      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>
      
      <Sidebar /> 
      <Routes>
        <Route path='/' element={<OverviewPage />} />
        <Route path='/products' element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App