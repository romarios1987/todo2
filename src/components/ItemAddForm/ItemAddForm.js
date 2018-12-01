import React, {Component} from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        })
    };


    render() {
        return (
            <div className='ItemAddForm row'>
                <form className='valign-wrapper' onSubmit={this.onSubmit}>
                    <input type="text" className='input-field col s6' onChange={this.onLabelChange}
                           placeholder="What needs to be done" value={this.state.label}/>

                    <div className="col s6 right-align">
                        <button className="btn waves-effect waves-light">Add Item
                            <i className="material-icons right">add</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};
