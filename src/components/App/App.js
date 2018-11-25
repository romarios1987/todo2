import React, {Component} from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";

export default class App extends Component {

    state = {
        todoData: [
            {label: 'React Learn', important: false, id: 1},
            {label: 'React Learn2', important: false, id: 2},
            {label: 'React Learn3', important: true, id: 3}
        ]
    };

    deleteItem = (id) => {

        this.setState(({todoData}) => {
            // получаем индекс елемента которого хотим удалить
            const idx = todoData.findIndex((el) => el.id === id);

            // удаляем елемент (НЕправильный подход - Меняем существующий state)
            //todoData.splice(idx, 1);

            // удаляем елемент (Правильный подход)
            // const before = todoData.slice(0, idx);
            // const after = todoData.slice(idx + 1);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            }
        })
    };

    render() {
        const {todoData} = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <AppHeader/>
                        <SearchPanel/>
                        <TodoList
                            todos={todoData}
                            onDeleted={this.deleteItem}
                        />
                    </div>
                </div>
            </div>
        )
    }
};
