import React, {Component} from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {


    render() {

        const {onItemAdded} = this.props;
        console.log(onItemAdded(23434));
        return (
            <div className='ItemAddForm row'>
                <form className='valign-wrapper'>
                    <input type="text" className='input-field col s6'/>

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
