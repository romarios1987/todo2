import React, {Component} from 'react';
import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemAddForm from "../ItemAddForm/ItemAddForm";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            {label: 'React Learn', important: false, id: 1},
            {label: 'React Learn2', important: false, id: 2},
            {label: 'React Learn3', important: true, id: 3}
        ]
    };

    notify = () => toast.error('Enter task !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });


    onToggleImportant = (id) => {
        console.log('onToggleImportant', id)
    };

    onToggleDone = (id) => {
        console.log('onToggleDone', id)
    };

    addItem = (text) => {

        if (text !== '') {
            // create new item
            const newItem = {
                label: text,
                important: false,
                id: this.maxId++
            };

            // add element in array
            this.setState(({todoData}) => {

                // Плохой способ
                //todoData.push(newItem);

                const newArray = [...todoData, newItem];
                return {
                    todoData: newArray
                }
            })

        } else {
            //alert('Enter text')
            //M.toast({html: 'I am a toast!'})

            this.notify();

        }


    };


    // Delete Item
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
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                        />
                        <ItemAddForm
                            onItemAdded={this.addItem}
                        />
                        <ToastContainer
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnVisibilityChange
                            draggable
                            pauseOnHover
                        />
                    </div>
                </div>
            </div>
        )
    }
};
