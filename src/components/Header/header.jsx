import Logo from '../Logo/logo';
import Search from '../Search/search';
import './index.css';


function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <Logo/>
          <Search/>
        </div>
      </div>
    </header>
  )
}

export default Header;
