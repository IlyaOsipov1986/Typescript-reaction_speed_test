import React, {useState} from 'react';
import './App.css';
import {ITodo} from "../../types/data";
import TodoList from "../TodoList/TodoList";
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

const App: React.FC = () => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
           setValue('');
        }
    }

    const removeTodo = (id: number) : void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number) : void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo
            }
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const handlehange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') {
            addTodo()
        }
    }

  return (
    <div className="App">
        <div className="test-page-wrapper">
            <div className="test-page-header">
                <p className="test-page-header__timer">0.000</p>
                <p className="test-page-header__counter">1</p>
            </div>
            <div className="test-page-rules-title">
                <h3 className="test-page-rules-title__title">1 to 50</h3>
                <p className="test-page-rules-title__riles">Touching from 1 to 50 as fast as yuo can.</p>
                <button className="test-page-rules-title__restart-btn">Restart</button>
            </div>
            <div className="test-page-container">
                <div className="test-page-main-block">

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
