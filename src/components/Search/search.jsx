import './index.css';
import {ReactComponent as SearchIcon} from './ic-search.svg';
import {ReactComponent as CloseIcon} from './ic-close-input.svg';


function Search({onSubmit, onInput}) {
  const handleInput = (e) =>{
    // принимает значения введенные в инпут
    onInput(e.target.value)
  }
  return (
   <form className="search" onSubmit = {onSubmit}>
        <input type="text" className='search__input' placeholder='Поиск' onInput ={handleInput}/>
        <button className='search__btn'>
            <SearchIcon/>
            {false && <CloseIcon/>}
        </button>
   </form>
  )
}

export default Search;
