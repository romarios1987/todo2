import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    return (
        <div className='row'>
            <div className="SearchPanel">
                <div className="col s12 m6">
                    <input type="text" placeholder={searchText}/>
                </div>
                <div className="col s12 m6">
                    <div className="filter">
                        <button className="btn deep-orange accent-4">All</button>
                        <button className="btn">Active</button>
                        <button className="btn">Done</button>
                    </div>
                </div>
            </div>
            <div className="col s12"><span className='right-align'>3 more to do, 0 done</span></div>
        </div>

    )
};

export default SearchPanel;