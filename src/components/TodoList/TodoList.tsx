import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import {ITodo} from "../../types/data";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {
        items,
        removeTodo,
        toggleTodo
    } = props;

    return (
        <div>
            {items.map(todo => <TodoItem
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                {...todo}
            />)}
        </div>
    )
}
export default TodoList;