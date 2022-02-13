
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Work from '../pages/Work'
import About from '../pages/Section/About'
import Contacts from '../pages/Section/Contact'
import NotFound from '../pages/NotFoud'


export default function Routers(){

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/works' element={<Work/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}
