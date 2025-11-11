import Counter from './components/Counter';
import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <div>
        <h1 style={{ textAlign: 'center', color: 'navy' }}>Welcome to My React App</h1>
        <Counter />
      </div>
      <Footer />
    </>
  )
}

export default App
