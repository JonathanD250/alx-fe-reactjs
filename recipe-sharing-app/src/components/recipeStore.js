import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe],
    // Update filtered list as well so the new recipe shows immediately
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe => 
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
    // Update filtered list to remove deleted item
    filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id)
  })),

  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    // Trigger filter to ensure updates are reflected in search results
    filteredRecipes: state.recipes
      .map((recipe) => (recipe.id === updatedRecipe.id ? updatedRecipe : recipe))
      .filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;