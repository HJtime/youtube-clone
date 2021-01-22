import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef=useRef();

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

    return(
        <header>
            <div>
                <i className="fab fa-youtube-square"></i>
                <h1>YOUTUBE</h1>
            </div>
            <input
            ref={inputRef}
            type="search"
            placeholder="search.."
            onKeyPress={onKeyPress}/>
            <button
            type="submit"
            onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>
        </header>
    );
};

export default SearchHeader;