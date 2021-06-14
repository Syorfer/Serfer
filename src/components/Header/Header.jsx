import React, { useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContext } from '@/contexts/searchContext';

const Header = () => {
    const { search, setSearch } = useContext(SearchContext);

    const onFieldChange = (e) => {
        const { name: fieldName, type } = e.target;

        const value = type === 'checkbox' ? e.target.checked : e.target.value;

        setSearch(prev => ({ ...prev, [fieldName]: value }));
    };
    return ( 
        <header className='header'>
            <h1 className='header__logo'>Sёrfer</h1>
            <form className='header__form'>
                <input 
                    type='text'
                    placeholder='Поиск'
                    className='header__input'
                    name="searchValue"                  
                    value={search.searchValue}
                    onChange={onFieldChange}
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