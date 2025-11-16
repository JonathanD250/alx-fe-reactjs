import { Link } from 'react-router-dom'
import useRecipeStore from '../recipeStore'

export default function RecipeList() {
  const recipes = useRecipeStore(state => state.recipes)

  if (!recipes.length) return <p style={{ textAlign: 'center', color: '#6c757d' }}>No recipes added yet.</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {recipes.map(r => (
        <div key={r.id} style={{ border: '1px solid #dee2e6', borderRadius: '6px', padding: '15px', backgroundColor: '#ffffff', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>
            <Link to={`/recipe/${r.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              {r.title}
            </Link>
          </h3>
          <p style={{ margin: 0, color: '#495057' }}>{r.description}</p>
        </div>
      ))}
    </div>
  )
}
