import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

const Home = () => (
  <>
    <AddRecipeForm />
    <RecipeList />
  </>
)

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#e9ecef', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', color: '#343a40', marginBottom: '30px' }}>Recipe Sharing Application 🍽️</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
