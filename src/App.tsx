import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from './styles/theme'

import { checkAuthRequest } from './redux/auth/authAction'

import Layout from './components/Layout'
import { Signup } from './pages/auth/Signup'
import { Login } from './pages/auth/Login'


export default function App() {
  const [theme, colorMode] = useMode()
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthRequest())
    }
  }, [dispatch])

  return (
    <ColorModeContext.Provider
    // @ts-ignore
    value={colorMode}
  >
    <ThemeProvider
    //@ts-ignore
      theme={theme}
    >
      <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Registration" element={<Signup />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
