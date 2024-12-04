import React from "react"

import Grid from "../template/Grid"
import IconizedButton from "../template/IconizedButton"

const TodoForm = () => (
    <div role="form" className="todo-form">
        
        <Grid sizes="12 * 9 10">        
            <input id="description" 
                className="form-control" 
                placeholder="Adicione uma tarefa" />
        </Grid>
        <Grid sizes="12 3 2 22">
            <IconizedButton style="primary" icon="plus" />
        </Grid>
        
    </div>
)

export default TodoForm