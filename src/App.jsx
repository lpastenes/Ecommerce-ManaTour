import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer titulo={'Lo más destacado'} /> }/>
        <Route path='/category/:idCategoria' element={ <ItemListContainer titulo={'Lo más destacado'}/> }/>
        <Route path='/item/:productId' element={ <ItemDetailContainer /> }/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
