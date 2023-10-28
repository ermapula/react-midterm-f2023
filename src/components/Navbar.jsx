import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import pfp from '../assets/pfp.jpg' 

export default function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <Link className='logo' to='/'>X</Link>
      </div>

      <div>
        ...
      </div>

      <div>
        <Link to='/profile'>
          <img src={pfp} className='pfp' />
        </Link>
      </div>
    </div>
  )
}
