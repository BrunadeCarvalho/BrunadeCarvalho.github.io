import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { PaginaInicial } from '../Pages/PaginaInicial'
export const Router = ()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}