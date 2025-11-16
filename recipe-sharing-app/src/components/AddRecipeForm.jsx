import { useState } from 'react'
import useRecipeStore from '../recipeStore'

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore(state => state.addRecipe)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    addRecipe({ id: Date.now(), title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}
    >
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px', minHeight: '80px' }}
      />
      <button 
        type="submit" 
        style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
      >
        Add Recipe
      </button>
    </form>
  )
}
