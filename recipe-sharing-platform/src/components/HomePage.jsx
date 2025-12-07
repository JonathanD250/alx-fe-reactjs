import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import recipeData from '../data.json';

const HomePage = () => {
  // State to store the recipes
  const [recipes, setRecipes] = useState([]);

  // useEffect to load data when component mounts
  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Recipe Sharing Platform
      </h1>

      {/* ------------------------------------------------------ */}
      {/* NEW: Button to Navigate to Add Recipe Form             */}
      {/* ------------------------------------------------------ */}
      <div className="text-center mb-8">
        <Link 
          to="/add-recipe"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg"
        >
          + Add New Recipe
        </Link>
      </div>
      {/* ------------------------------------------------------ */}

      {/* Grid Layout for Recipes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          >
            <Link to={`/recipe/${recipe.id}`}>
            
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

            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;