import { Route, Routes } from 'react-router-dom'
import { AlbumList } from '../pages/AlbumList'
import { Home } from '../pages/Home'


export const RouteList = () => {
    return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/albums/:id/photos' element={<AlbumList />} />
        </Routes>
    )
}