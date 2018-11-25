import React, {Component} from 'react';
import './TodoListItem.css';

//label = props.label
//important = props.important
export default class TodoListItem extends Component {


    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {done: !done}
        })
    };

    // onMarkImportant = () => {
    //     this.setState({
    //         // неверный подход
    //         // important: !this.state.important
    //         important: true
    //     })
    // };

    onMarkImportant = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    };



    render() {
        const {label, onDeleted} = this.props;

        const {done, important} = this.state;

        let cls = 'TodoListItem collection-item';

        if (done) {
            cls += ' done';
        }
        if (important) {
            cls += ' important';
        }


        return (
            <li className={cls}>

                <span onClick={this.onLabelClick}>{label}</span>

                <span>
                <button className="btn-floating waves-effect waves-light" onClick={this.onMarkImportant}><i
                    className="material-icons">flag</i></button>
                <button className="btn-floating waves-effect waves-light red"
                    onClick={onDeleted}
                ><i
                    className="material-icons">delete_forever</i></button>
                </span>
            </li>
        )
    }
}