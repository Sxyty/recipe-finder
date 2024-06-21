import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ onSearchResults }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length >= 3) fetchRecipes(value);
  };

  const APP_ID = process.env.APP_ID;
  const APP_KEY = process.env.APP_KEY;

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      onSearchResults(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
            >
              recipe-finder
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              component="div"
            >
              The best recipes an API could find!
            </Typography>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={inputValue}
              onChange={handleInputChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
