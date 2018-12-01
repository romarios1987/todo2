import React from 'react';
import './SearchPanel.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const SearchPanel = (props) => {
    const searchText = 'Type here to search';
    return (
        <div className='row'>
            <div className="SearchPanel">
                <div className="col s12 m6">
                    <input type="text" placeholder={searchText}/>
                </div>

                <ItemStatusFilter/>

            </div>
            <div className="col s12">
                <span style={{fontWeight: 'bold'}} className='right-align'>{props.toDo} more to do, {props.done} done</span>
            </div>
        </div>

    )
};

export default SearchPanel;