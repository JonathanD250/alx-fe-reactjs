import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Convert id string to number and find the recipe
    const data = recipeData.find((recipe) => recipe.id === parseInt(id));
    if (data) {
      setRecipe(data);
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        &larr; Back to Home
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        {/* Hero Image */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 object-cover" 
        />
        
        <div className="p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ingredients Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 inline-block pb-1">Ingredients</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-500 inline-block pb-1">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions && recipe.instructions.map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;