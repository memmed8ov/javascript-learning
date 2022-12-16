import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Cities } from '../city/city-page'
import { CountryAdd } from './CountryAdd'
import { CountryList } from './CountryList'
import { CountryUpdate } from './CountryUpdate'
import { CitiesOfCountry } from './ CitiesOfCountry'

export function Countries() {
    return <>
        <Routes>
            <Route path='' element={<CountryList></CountryList>} ></Route>
            <Route path='new' element={<CountryAdd></CountryAdd>} ></Route>
            <Route path=':id/update' element={<CountryUpdate></CountryUpdate>} ></Route>
            <Route path=':id/cities' element={<CitiesOfCountry></CitiesOfCountry>} ></Route>
        </Routes>
    </>
}


// useParams                                                           :id/cities/:taleh/:reyhan
// http://localhost:3000/country-page/4b4cd883-7729-11ed-8ee2-7c10c91d547f/cities/assddd/dasssss
// id => 4b4cd883-7729-11ed-8ee2-7c10c91d547
/*

params ={
    "id": "4b4cd883-7729-11ed-8ee2-7c10c91d547"
    "taleh": "assddd"
    "reyhan": "dasssss"
}

const itemId = params.id

*/