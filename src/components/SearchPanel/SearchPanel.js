import React, {Component} from 'react';
import './SearchPanel.css';
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const searchText = 'Type here to search';
        return (
            <div className='row'>
                <div className="SearchPanel">
                    <div className="col s12 m6">
                        <input type="text" placeholder={searchText} value={this.state.term}
                               onChange={this.onSearchChange}/>
                    </div>
                    <ItemStatusFilter/>
                </div>
                <div className="col s12">
                    <span style={{fontWeight: 'bold'}}
                          className='right-align'>{this.props.toDo} more to do, {this.props.done} done</span>
                </div>
            </div>
        )
    }
};
