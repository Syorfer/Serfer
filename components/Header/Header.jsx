import SearchIcon from "../icons/SearchIcon";

const Header = () => {
    return ( 
        <header className='header'>
            <h1 className='header__logo'>ЛОГО</h1>
            <form>
                <input 
                    type='text'
                    placeholder='Поиск'
                    className='header__input'
                />
                <button><SearchIcon /></button>
            </form>
            <select>
                <option disabled>Город</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
            </select>    
        </header>
     );
}
 
export default Header;