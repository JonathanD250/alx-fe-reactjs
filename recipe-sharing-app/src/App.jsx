import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css'; // Keep the default CSS if you want

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing Application 🍽️</h1>
      
      {/* The form allows adding a recipe, which updates the global state */}
      <AddRecipeForm />
      
      <hr style={{ margin: '30px 0' }} />
      
      {/* The list reads the updated global state and displays it */}
      <RecipeList />
    </div>
  );
}

export default App;