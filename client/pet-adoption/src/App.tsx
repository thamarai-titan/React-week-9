import Header from './Header'
import './App.css'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {

  return <div>
    <Header/>
    <BrowserRouter>
    <Routes>
        <Route path="form" element={<Form/>}/>
    </Routes>
    
    </BrowserRouter>
  </div>

}
function Form() {
  return <div>
      <div className="form-div">
          <form action="" className="Form">
              <div className="labels">
                  <label htmlFor="text" >Pet Name</label>
              </div>
              <div>
                  <input type="text" placeholder="Pet Name" />
              </div>
              <div className="labels">
                  <label htmlFor="text" >Pet Type</label>
              </div>
              <div>
                  <input type="text" placeholder="Pet Type" />
              </div>
              <div className="labels">
                  <label htmlFor="text" >Pet Breed</label>
              </div>
              <div>
                  <input type="text" placeholder="Pet Breed" />
              </div>
              <div className="labels">
                  <label htmlFor="text">Your Name</label>
              </div>
              <div>
                  <input type="text" placeholder="Your Name" />
              </div>
              <div className="labels">
                  <label htmlFor="text">Email</label>
              </div>
              <div>
                  <input type="text" placeholder="Email" />
              </div>
              <div className="labels">
                  <label htmlFor="text">Phone</label>
              </div>
              <div>
                  <input type="text" placeholder="Phone" />
              </div>
              <div><button>Submit</button></div>

          </form>
      </div>

  </div>
}
export default App
