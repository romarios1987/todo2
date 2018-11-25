import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

    render() {
        return (
            <div className="col s12 m6">
                <div className="ItemStatusFilter">
                    <button className="btn deep-orange accent-4">All</button>
                    <button className="btn">Active</button>
                    <button className="btn">Done</button>
                </div>
            </div>
        )
    }
};
