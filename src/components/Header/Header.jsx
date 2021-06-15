import React, { useState, useContext } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchContext } from '@/contexts/searchContext';

const Header = () => {
    const { search, setSearch } = useContext(SearchContext);
    const [form, setForm] = useState(search);

    const onFieldChange = (e) => {
        const { name: fieldName, value } = e.target;
       
        setForm(prev => ({ ...prev, [fieldName]: value }));
    };
    const onSubmit = (e) => {
        setSearch(prev => ({ ...prev, searchValue: form.searchValue, submit: true }));
        e.preventDefault();
    };
    const onReset = () => {
        setForm({ searchValue: ''});
    };

    return (
        <header className='header'>
            <h1 className='header__logo'>Sёrfer</h1>
            <form className='header__form' onSubmit={onSubmit} onReset={onReset}>
                <input
                    type='text'
                    placeholder='Найдётся всё'
                    className='header__input'
                    name="searchValue"
                    value={form.searchValue}
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