import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    const newErrors = {};

    if (!title) {
      newErrors.title = 'Recipe title is required';
    }

    if (!ingredients) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please include at least two ingredients (comma separated)';
    }

    if (!steps) {
      newErrors.steps = 'Preparation steps are required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes
    console.log({ title, ingredients, steps });
    alert('Recipe posted successfully!');
    
    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
        
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.title ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="e.g., Spaghetti Carbonara"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">Ingredients (comma separated)</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 h-32 resize-none ${errors.ingredients ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="e.g., Spaghetti, Eggs, Cheese, Bacon"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Input */}
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">Preparation Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 h-40 resize-none ${errors.steps ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="e.g., 1. Boil water. 2. Cook pasta."
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Post Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;