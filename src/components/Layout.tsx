import { Outlet } from 'react-router-dom'

import { Box, Typography, useTheme } from '@mui/material'
import Header1 from './Header1'
import Header2 from './Header2'

export default function Layout() {
  const theme = useTheme();

  return (
    <Box
      bgcolor="#eeeeee"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
    >
      <Header1 />
      <Header2 />
      <Box flex="1" paddingTop="30px">
        <Outlet />
      </Box>
      <Box display='flex' justifyContent="center" sx={{bgcolor: theme.palette.myColor.main}}>
       <Typography>{ new Date().getFullYear() }</Typography>
      </Box>
    </Box>
  )
}
