import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Countries } from './rout/country/country-page';

import { Cities } from './rout/city/city-page';
import { Login } from './rout/login/LoginPage';


export function NavBar() {
    const navigate = useNavigate()

    const isLoggedIn = !!localStorage.getItem('token')

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
                {isLoggedIn && <Button sx={{ color: '#fff' }} onClick={() => {
                    localStorage.removeItem('token')
                    navigate('/logout')

                }}>
                    Logout
                </Button>}
            </Box>
        </Toolbar>
    </AppBar>)
}

// eger login olmamisansa, Logout button gosterme

function ProtectedRoutes() {
    const navigate = useNavigate()

    const isLoggedIn = !!localStorage.getItem('token')

    console.log('step 1', isLoggedIn) // login oldugum halda isLoggedIn false dur, true olmali idi

    useEffect(() => {
        console.log('step 2', isLoggedIn)

        if (!isLoggedIn) { // login oldugum halda, bu ifin icine girmemeli idi
            console.log('step 3', isLoggedIn)
            navigate('/login')
            console.log('step 4', isLoggedIn)
        }
        console.log('step 5', isLoggedIn)
    }, [isLoggedIn])

    if (!isLoggedIn) {
        return <></>
    }

    // ok[2:30, 2022-12-31] Enishte: 1. Eger login ugurlu oldusa, on sehifeye navigate ele ( / )
    // ok[2:30, 2022-12-31] Enishte: 2. Eger localStorage de token adinda deyisen movcuddursa onda /login sehifesine redirect eleme

    return <>
        <Routes>
            <Route path='/country-page/*' element={<Countries></Countries>} ></Route>
            <Route path='/city-page/*' element={<Cities></Cities>} ></Route>
        </Routes>
    </>
}


function App() { const isLoggedIn = !!localStorage.getItem('token')
    return <>
    
        <Router>
        {isLoggedIn &&<NavBar />}
            <br />
            <br />
            <br />
            <Routes>
                <Route path='/login/*' element={<Login></Login>} ></Route>
                <Route path='/*' element={<ProtectedRoutes />} ></Route>
            </Routes>
        </Router>
    </>
}

export default App;