import React from 'react';
import RecipeBox from '../RecipeBox/RecipeBox';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding-top: 16px;
`;

const RecipeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 80%;
  margin: 0 auto;
  overflow: hidden;
`;

const RecipeBoxWrapper = styled.div`
  padding: 8px;
  flex: 1 1 304px;
  box-sizing: border-box;
`;

/*
  I planned a feature that would allow to load more recipies while scrolling 
  but it burnt through free api calls pretty quickly so I've removed it.
*/

const RecipeBoxGrid = ({ recipes }) => {
  return (
    <Container>
      <RecipeGrid>
        {recipes.map((recipe, index) => (
          <RecipeBoxWrapper key={`${recipe.recipe.uri}_${index}`}>
            <RecipeBox recipe={recipe.recipe} />
          </RecipeBoxWrapper >
        ))}
      </RecipeGrid>
    </Container>
  );
};

export default RecipeBoxGrid;
