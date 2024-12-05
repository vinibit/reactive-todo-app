import React from "react"

import Grid from "../template/Grid"
import IconizedButton from "../template/IconizedButton"

const TodoForm = ({ description, handleChange, handleAdd, handleSearch, handleClear }) => {
    
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? handleSearch() : handleAdd()
        } else if (e.key === 'Escape') {
            handleClear()
        }
    }
    
    return (
        <div role="form" className="todo-form">
            
            <Grid sizes="12 * 9 10">        
                <input id="description" 
                    className="form-control" 
                    placeholder="Adicione uma tarefa" 
                    onChange={handleChange}
                    onKeyUp={keyHandler}
                    value={description} />
            </Grid>
            <Grid sizes="12 3 2 22">
                <IconizedButton 
                    style="primary" 
                    icon="plus" 
                    onClick={handleAdd} />
                <IconizedButton
                    style="info"
                    icon="search"
                    onClick={() => handleSearch(description)} />
                <IconizedButton
                    style="default"
                    icon="close"
                    onClick={() => handleClear()} />            
            </Grid>        
        </div>
    )
}

export default TodoForm