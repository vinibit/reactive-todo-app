import React from "react"
import IconizedButton from "../template/IconizedButton"

const TodoList = ({ list, handleRemove, handleMarkAsDone, handleMarkAsPending }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(todo => (
                        !!list &&
                        <tr key={todo._id}>
                            <td
                                className={todo.done ? 'marked-done' : ''}>
                                {todo.description}
                            </td>
                            <td className='actions'>
                                <IconizedButton
                                    icon="check" 
                                    style="success"
                                    hidden={todo.done} 
                                    onClick={() => handleMarkAsDone(todo)} 
                                />
                                <IconizedButton
                                    icon="undo" 
                                    style="warning" 
                                    hidden={!todo.done}
                                    onClick={() => handleMarkAsPending(todo)}
                                />
                                <IconizedButton 
                                    icon="trash-o" 
                                    style="danger"
                                    hidden={!todo.done} 
                                    onClick={() => handleRemove(todo)} 
                                />
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TodoList