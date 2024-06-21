import React, { useState, useEffect } from 'react';
import RecipeBoxGrid from './components/RecipeBoxGrid/RecipeBoxGrid';
import SearchAppBar from './components/SearchAppBar/SearchAppBar';
import { Typography, Box } from '@mui/material';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchInitialResults();
  }, []);

  const initialSearches = ["duck", "chicken", "lamb", "cake", "salad"];
  const random = Math.floor(Math.random() * initialSearches.length);

  const EDAMAM_ID = process.env.REACT_APP_EDAMAM_ID;
  const EDAMAM_KEY = process.env.REACT_APP_EDAMAM_KEY;

  const fetchInitialResults = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${initialSearches[random]}&type=public&app_id=${EDAMAM_ID}&app_key=${EDAMAM_KEY}`);
      const data = await response.json();
      setRecipes(data.hits.slice(0, 6));
    } catch (error) {
      console.error('Error fetching initial recipes:', error);
    }
  };

  const handleSearchResults = (data) => {
    setRecipes(data.hits);
  };

  return (
    <div>
      <SearchAppBar onSearchResults={handleSearchResults} />
      <RecipeBoxGrid recipes={recipes} />
      {recipes.length < 7 && (
        <Box sx={{ textAlign: 'center', marginTop: '16px' }}>
          <Typography variant="h6" component="div">
            Use the search bar above to find more delicious recipes!
          </Typography>
        </Box>
      )}
    </div>
  );
}

export default App;