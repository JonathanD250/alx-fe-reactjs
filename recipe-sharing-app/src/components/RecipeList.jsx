import useRecipeStore from '../recipeStore';
import { Link } from 'react-router-dom'; // Import Link

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  const containerStyle = { padding: '10px', border: '1px solid #ccc', margin: '10px 0', borderRadius: '5px' };
  const linkStyle = { textDecoration: 'none', color: '#007bff' };

  return (
    <div>
      <h2>Recipe List ({recipes.length} total)</h2>
      {recipes.length === 0 ? (
        <p>No recipes added yet.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} style={containerStyle}>
            {/* Wrap the title in a Link component */}
            <Link to={`/recipe/${recipe.id}`} style={linkStyle}> 
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description.substring(0, 50)}...</p> 
          </div>
        ))
      )}
    </div>
  );
}

export default RecipeList;