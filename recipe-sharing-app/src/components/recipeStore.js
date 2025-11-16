import create from 'zustand'

// Define the recipe store
const useRecipeStore = create(set => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // Set the initial list of recipes (optional)
  setRecipes: (recipes) => set({ recipes }),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r =>
      r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
    )
  })),

  // Delete a recipe by ID
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id)
  }))
}))

export default useRecipeStore
