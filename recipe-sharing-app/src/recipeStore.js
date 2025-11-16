import { create } from 'zustand';

// Defines the store
const useRecipeStore = create((set) => ({
  // State properties
  recipes: [
    // Initialize with a few dummy recipes for testing
    { id: 1, title: "Classic Lasagna", description: "Layers of pasta, meat sauce, and cheese." },
    { id: 2, title: "Simple Salad", description: "Lettuce, tomatoes, and a light vinaigrette." },
  ],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to set the entire recipe array (useful later for loading/resetting)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;