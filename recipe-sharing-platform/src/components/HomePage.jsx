import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  // State to store the recipes
  const [recipes, setRecipes] = useState([]);

  // useEffect to load data when component mounts
  useEffect(() => {
    // In a real API application, you would fetch data here.
    // For this task, we set the mock data.
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>

      {/* Grid Layout for Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            
            {/* Recipe Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600">
                {recipe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;