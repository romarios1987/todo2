import React, {Component} from 'react';
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const cls = isActive ? 'btn deep-orange accent-4' : 'btn';
            return (
                <button
                    className={cls}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >{label}</button>
            )
        });


        return (
            <div className="col s12 m6">
                <div className="ItemStatusFilter">
                    {buttons}
                </div>
            </div>
        )
    }
};
