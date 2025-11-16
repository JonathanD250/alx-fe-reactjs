import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom';

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // After deletion, navigate back to the home page
      navigate('/');
    }
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '20px'
  };

  return (
    <button onClick={handleDelete} style={buttonStyle}>
      Delete Recipe
    </button>
  );
}

export default DeleteRecipeButton;