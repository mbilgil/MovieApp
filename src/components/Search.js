import React from 'react';
function Search({ handleInput , search}) {
    return (
        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                onChange={handleInput}
                onKeyPress={search}
                className="searchbox">
            </input>
        </section>
    );
}
export default Search; 