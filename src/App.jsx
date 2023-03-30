import './App.css'
import Navbar from './components/Navbar/Navbar'
import Shop from './components/Shop/Shop'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>

        <section className='product-selection-area container'>
          <Shop></Shop>
        </section>
        
      </main>
    </div>
  )
}

export default App
