import { useState } from 'react';
import useRecipeStore from '../recipeStore'; // Note the path change to '../recipeStore'

function AddRecipeForm() {
  // Select the 'addRecipe' action from the store
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!title || !description) return;

    // Use the store action to add the new recipe
    addRecipe({ 
      id: Date.now(), // Use a timestamp for a unique ID
      title, 
      description 
    });
    
    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  const inputStyle = { display: 'block', margin: '10px 0', padding: '8px', width: '90%' };
  const buttonStyle = { padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' };

  return (
    <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={inputStyle}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description (Ingredients, Steps, etc.)"
          style={{...inputStyle, minHeight: '100px'}}
          required
        />
        <button type="submit" style={buttonStyle}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;