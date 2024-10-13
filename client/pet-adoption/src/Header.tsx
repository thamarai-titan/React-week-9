import { BrowserRouter, Link } from 'react-router-dom'
import './App.css'
function Header(){


    return <div>

      <div className="Header-container">
      <div className="Nav-bar">
        <BrowserRouter>
            <Link to={"/form"} style={{"textDecoration":"none",}}><div>Home</div></Link>
        </BrowserRouter>
            <div>Table</div>
            <div>Form</div>
        </div>
      </div>


    </div>
}

export default Header