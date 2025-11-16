import { useState } from 'react';
import useRecipeStore from '../recipeStore';

function EditRecipeForm({ recipe, onEditComplete }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  
  // Initialize state with the existing recipe's data
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;

    // Call the store action with the updated object
    updateRecipe({
      id: recipe.id,
      title,
      description,
    });
    
    // Notify the parent component (RecipeDetails) that editing is finished
    onEditComplete();
  };

  const inputStyle = { display: 'block', margin: '10px 0', padding: '8px', width: '90%' };
  const buttonStyle = { padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' };
  const cancelStyle = { ...buttonStyle, backgroundColor: '#6c757d' };

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '4px' }}>
      <h3>Edit Recipe</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={inputStyle}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{...inputStyle, minHeight: '100px'}}
        />
        <button type="submit" style={buttonStyle}>
          Save Changes
        </button>
        <button type="button" onClick={onEditComplete} style={cancelStyle}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditRecipeForm;