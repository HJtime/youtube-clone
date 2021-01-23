import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './search_header.module.css'

const SearchHeader = ({onSearch}) => {
    const inputRef=useRef();
    const history=useHistory();

    const handleSearch=()=>{
        const value=inputRef.current.value;
        onSearch(value);
    }

    const onClick=()=>{
        handleSearch();
    }

    const onKeyPress=(event)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    }

    const onLogoClick=()=>{
        history.push({
            pathname:'/'
        });
    }

    return(
        <header className={styles.header}>
            <div onClick={onLogoClick} className={styles.logo}>
            <img src={process.env.PUBLIC_URL+'/images/logo.png'} className={styles.img} alt="logo"></img>
                <h1 className={styles.title}>YOUTUBE</h1>
            </div>
            <input
            ref={inputRef}
            type="search"
            className={styles.input}
            placeholder="search.."
            onKeyPress={onKeyPress}/>
            <button
            type="submit"
            onClick={onClick}
            className={styles.button}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default SearchHeader;