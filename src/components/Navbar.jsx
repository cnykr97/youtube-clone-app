import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import {logo} from '../utils/constants'
import SearchBar from "./SearchBar"


const Navbar = () => (
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', top: 0, background: '#000', justifyContent:"space-between" }} 
    >
      <Link to="/" style={{display: "flex", flexDirection: "row" ,alignItems:"center"}} >
        <img src={logo} alt="logo" height={45}  />
        <Typography variant="h5" sx={{color: "white", marginLeft: 1}} >
          Wdaw Media
        </Typography>
      </Link>
      <SearchBar/>
      
    </Stack>
    
  )

export default Navbar