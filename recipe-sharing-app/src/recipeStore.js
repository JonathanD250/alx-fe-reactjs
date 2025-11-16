import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Classic Lasagna", description: "Layers of pasta, meat sauce, and cheese." },
    { id: 2, title: "Simple Salad", description: "Lettuce, tomatoes, and a light vinaigrette." },
  ],

  // Action to add a new recipe (already existed)
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      // Filter out the recipe that matches the provided ID
      recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
    })),

  // Action to update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe } // Merge the existing recipe with the updated fields
          : recipe
      ),
    })),

  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;