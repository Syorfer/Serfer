import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return ( 
        <header className='header'>
            <h1 className='header__logo'>ЛОГО</h1>
            <form className='header__form'>
                <input 
                    type='text'
                    placeholder='Поиск'
                    className='header__input'
                />
                <button className='header__btn'><FontAwesomeIcon icon={faSearch} className='header__btn-icon' /></button>
            </form>
            <select className='header__cities'>
                <option>Город</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
            </select>    
        </header>
     );
}
 
export default Header;