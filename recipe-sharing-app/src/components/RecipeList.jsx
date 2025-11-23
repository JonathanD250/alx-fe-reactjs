import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Use filteredRecipes instead of all recipes
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  // Optional: Trigger filter on mount to ensure list is populated
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  
  // In case the filtered list is empty because we haven't searched yet,
  // we might want to show all. However, usually we initialize filteredRecipes
  // with all recipes or ensure filterRecipes is called. 
  // For this task, assuming the user might type immediately or we trigger it here:
  
  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;