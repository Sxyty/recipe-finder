import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';

const RecipeBoxContainer = styled.div`
  border: 2px solid #fb8161;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 450px;
  width: 304px;
  box-sizing: border-box;
`;

const RecipeImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 8px;
  border-bottom: 2px solid #fb8161;
  flex-shrink: 0;
`;

const RecipeLabel = styled(Typography)`
  text-align: center;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const RecipeDetails = styled(Box)`
  text-align: center;
  font-size: 14px;
  margin-top: auto;
  width: 100%;
  flex-shrink: 0;
`;

export default function RecipeBox({ recipe }) {
  if (!recipe) return null;

  return (
    <RecipeBoxContainer>
      {recipe.images && (
        <RecipeImage src={recipe.images.REGULAR.url} alt={recipe.label} />
      )}
      <RecipeLabel variant="h6" component="div">
        {recipe.label}
      </RecipeLabel>
      <RecipeDetails>
        <Typography variant="body2" component="div">
          {Math.round(recipe.calories)} calories
        </Typography>
        <Typography variant="body2" component="div">
          {recipe.totalTime > 0 ? `${recipe.totalTime} minutes` : 'Time not available'}
        </Typography>
        <Typography variant="body2" component="div">
          Ingredients: {recipe.ingredients.length}
        </Typography>
      </RecipeDetails>
    </RecipeBoxContainer>
  );
}