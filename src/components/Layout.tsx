import { Outlet } from 'react-router-dom'

import Navigatin from './Navigation'
import { Box } from '@mui/material'

export default function Layout() {
  return (
    <Box
      bgcolor="#eeeeee"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Navigatin />
      <Box flex="1" paddingTop="30px">
        <Outlet />
      </Box>
      <Box display='flex' justifyContent="center">
       { new Date().getFullYear() }
      </Box>
    </Box>
  )
}
