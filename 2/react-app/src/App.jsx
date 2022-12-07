import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import {Countries} from './rout/country/country-page';

import {Cities} from './rout/city/city-page';

export function NavBar() {
    const navigate = useNavigate()

    return (<AppBar component="nav">
        <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button sx={{ color: '#fff' }} onClick={() => {
                    navigate('/country-page')
                }}>
                    Country
                </Button>
                <Button sx={{ color: '#fff' }} onClick={() => {
                    navigate('/city-page')
                }}>
                    City
                </Button>
               
            </Box>
        </Toolbar>
    </AppBar>)
}

function App() {
    return <>
        <Router>
            <NavBar />
            <br />
            <br />
            <br />
            <Routes>
                <Route path='/country-page/*' element={<Countries></Countries>} ></Route>
                <Route path='/city-page/*' element={<Cities></Cities>} ></Route>
            </Routes>
        </Router>
    </>
}

export default App;