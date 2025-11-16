import useRecipeStore from '../recipeStore'; // Note the path change to '../recipeStore'

function RecipeList() {
  // Select the 'recipes' state from the store
  const recipes = useRecipeStore((state) => state.recipes);

  // Simple inline styles for clarity
  const containerStyle = { padding: '10px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' };

  return (
    <div>
      <h2>Recipe List ({recipes.length} total)</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={containerStyle}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;