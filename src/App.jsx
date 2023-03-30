import './App.css'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <main>

        <section className='product-selection-area container'>
          <Products></Products>
        </section>
        
      </main>
    </div>
  )
}

export default App
