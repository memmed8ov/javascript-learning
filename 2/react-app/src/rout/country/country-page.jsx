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
