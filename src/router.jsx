import {Routes, Route} from 'react-router-dom'
import { Inicio } from './pages/Inicio'
import { Series } from './pages/Series'
import { Filmes } from './pages/Filmes'
import { Erro } from './pages/Erro'


export function Router(){

    return(
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/filmes' element={<Filmes/>} />
            <Route path='/series' element={<Series/>} />           

            <Route path='*' element={<Erro />} />

        </Routes>
    )

}