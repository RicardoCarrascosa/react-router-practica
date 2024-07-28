import { NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
