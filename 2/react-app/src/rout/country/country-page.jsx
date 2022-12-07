import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CountryAdd } from './CountryAdd'
import { CountryList } from './CountryList'
import { CountryUpdate } from './CountryUpdate'

export function Countries() {
    return <>
        <Routes>
            <Route path='' element={<CountryList></CountryList>} ></Route>
            <Route path='new' element={<CountryAdd></CountryAdd>} ></Route>
            <Route path=':id/update' element={<CountryUpdate></CountryUpdate>} ></Route>
        </Routes>
    </>
}
