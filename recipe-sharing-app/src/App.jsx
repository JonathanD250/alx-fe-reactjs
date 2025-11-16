import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// Home component to hold the form and list
const Home = () => (
    <>
        <AddRecipeForm />
        <hr style={{ margin: '30px 0' }} />
        <RecipeList />
    </>
);

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing Application 🍽️</h1>
      
      <Routes>
        {/* Route for the home page (Form and List) */}
        <Route path="/" element={<Home />} />
        
        {/* Dynamic route for the recipe details page. :recipeId captures the ID from the URL */}
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;