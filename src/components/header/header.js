import search from './image/search.svg'

import './header.css';

function Header() {
  return (
    <header>
        <div className='logo-search_form d-flex space-around wrap'>
            <div className='logo'>
                <span>ClockFace</span>
            </div>
            <div className='search_form relative'>
                <input type ='text' placeholder='Search' ></input>
                <img className = 'search absolute' src = {search} alt="search"/>
            </div>
        </div>
        <nav  className='d-flex j-center'>
          <ul className='d-flex wrap j-center'>
            <li>Hands</li>
            <li>About us</li>
            <li>Contacs</li>
            <li>How to order a watch</li>
            <li>Terms of purchase</li>
          </ul>
        </nav>
        <div className='header_info d-flex column a-center no-wrap'>
            <h1>Swiss watches on order</h1>
            <p>Keep track of the time with the<br/>best Swiss watches</p>
            <button>Order a watch</button>
        </div>
    </header>
  );
}

export default Header;
