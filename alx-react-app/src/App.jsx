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
        name="Jonathan Darko Ntim" 
        age="30" 
        bio="Love to travel and being around the Deaf community." 
      />
      <Footer />
    </>
  )
}

export default App
