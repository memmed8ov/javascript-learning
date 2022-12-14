import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CityAdd } from './CityAdd'
import { CityList } from './CityList'
import { CityUpdate } from './CityUpdate'
// import {Test} from '../reyhan/country-city'
export function Cities() {
    return <>
        <Routes>
            <Route path='' element={<CityList></CityList>} ></Route>
            <Route path='new' element={<CityAdd></CityAdd>} ></Route>
            <Route path=':id/update' element={<CityUpdate></CityUpdate>} ></Route>
            {/* <Route path=''element={<Test></Test>}></Route> */}
        </Routes>
    </>
}

