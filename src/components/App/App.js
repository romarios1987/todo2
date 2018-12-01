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
            this.createTodoItem('React Learn'),
            this.createTodoItem('React 2 Learn'),
            this.createTodoItem('React 3 Learn')
        ],
        term: '',
        filter: 'all'// all, active, done
    };


    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };


    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        // Update Object
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        // construct new array
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }


    notify = () => toast.error('Please Enter task !', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });


    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        })
    };

    addItem = (text) => {
        if (text !== '') {
            const newItem = this.createTodoItem(text);
            this.setState(({todoData}) => {
                const newArray = [...todoData, newItem];
                return {
                    todoData: newArray
                }
            })
        } else {
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


    // Search
    searchItems(items, term) {

        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    };


    // Filter
    filterItems(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'done':
                return items.filter((item) => item.done);
            case 'active':
                return items.filter((item) => !item.done);
            default:
                return items;
        }
    }


    onFilterChange = (filter) =>{
        this.setState({filter})
    };


    render() {
        const {todoData, term, filter} = this.state;

        const visibleItems = this.filterItems(this.searchItems(todoData, term), filter);

        // count items done
        const doneCount = todoData.filter((el) => el.done).length;

        // count all items
        const toDoCount = todoData.length - doneCount;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <AppHeader/>
                        <SearchPanel
                            toDo={toDoCount}
                            done={doneCount}
                            onSearchChange={this.onSearchChange}
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                        <TodoList
                            todos={visibleItems}
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
