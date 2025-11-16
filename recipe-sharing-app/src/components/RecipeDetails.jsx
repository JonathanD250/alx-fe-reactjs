import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

function RecipeDetails() {
  // 1. Get the ID from the URL parameters
  const { recipeId } = useParams();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  // 2. Find the recipe using the ID
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  if (!recipe) {
    // If the recipe is not found (e.g., deleted), redirect home
    navigate('/');
    return null;
  }

  const editButtonStyle = {
    backgroundColor: '#ffc107',
    color: 'black',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginRight: '10px'
  };

  return (
    <div>
      {isEditing ? (
        // SHOW EDIT FORM
        <EditRecipeForm 
          recipe={recipe} 
          onEditComplete={() => setIsEditing(false)} 
        />
      ) : (
        // SHOW DETAILS
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
          <h1>{recipe.title}</h1>
          <p><strong>ID:</strong> {recipe.id}</p>
          <p>{recipe.description}</p>
          
          <button onClick={() => setIsEditing(true)} style={editButtonStyle}>
            Edit Recipe
          </button>
          
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;