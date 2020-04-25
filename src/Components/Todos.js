import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectAllTasks, selectFilteredTasks, selectIsLoading, selectIsError, selectInputNewTask, selectInputSearchTask } from '../modules/todos.selector';
import { FETCH_INIT_TASKS, DISPLAY_ALL, DISPLAY_DONE, DISPLAY_UNDONE, INPUT_NEW_TASK, INPUT_SEARCH_TASK, ADD_NEW_TASK_TO_LIST, CHANGE_TASK_STATUS, DELETE_TASK } from '../modules/todos.action';
import { TodoContainer, TodoTextInput, TodoButton, TodoButtonSelect, TodoButtonChange, TodoButtonErase } from './todos.style';


const Todos = (props) => {

    useEffect(() => {
        props.getTasks();
    });

    return (     
        <TodoContainer>
          <h2>TO DO LIST</h2>
          <form style={{display: "flex",
                        justifyContent: "center"}}>
            <TodoTextInput
                placeholder='wpisz zadanie'          
                value={props.inputNewTask}
                onChange={(e) => props.setInputNewTask(e.target.value)}
            />
            <br />         
            <TodoButton           
                onClick={() => props.sendNewTask(props.inputNewTask)}        
            >
            Dodaj do listy!
            </TodoButton>
          </form>
          <br />
          <hr/>
          <div>            
          <TodoTextInput
            placeholder='szukaj...'    
            value={props.inputSearchTask}
            onChange={(e) => props.setInputSearchTask(e.target.value)}
          /> 
          <TodoButton>Szukaj zadania</TodoButton>
          </div>
          <br />      
          <br />
          <div> Sortuj zadania:
            <br/><br/>
            <TodoButtonSelect onClick={props.displayAll}>Wszystkie</TodoButtonSelect>
            <TodoButtonSelect onClick={props.displayDone}>Wykonane</TodoButtonSelect>
            <TodoButtonSelect onClick={props.displayUndone}>Do wykonania</TodoButtonSelect>
          </div>          
          <br />         

          {props.isError ?
            'error!'
            :
            props.isLoading ?
              'loading...'
              :
              props.taskList.length > 0 ?
                <ul style={{listStyleType: "none"}}>
                  {props.filteredTasks.length > 0 ?
                    props.filteredTasks.map((task) => {
                      return (
                        <li key={task.key}>
                          <div style={{display: "flex",
                                        justifyContent: "space-around"}}>
                            <TodoButtonChange onClick={() => props.changeTaskStatus(task)}>Zmień status</TodoButtonChange>
                          <div style={{
                                    textDecoration: task.done ? "line-through" : "none",
                                    fontStyle: "bold",
                                    cursor: "pointer",
                                    padding: '5px',                                   
                                    fontFamily: 'Arial',
	                                fontSize: '1.5rem',
	                                fontWeight: 'bold',
                                }} onClick={() => props.changeTaskStatus(task)}>
                            {task.done ? ` ${task.title}` : `${task.title}`}                           
                          </div>                             
                          <TodoButtonErase onClick={() => props.deleteTask(task)}>
                              Usuń z listy
                          </TodoButtonErase>  
                          </div>             
                          <hr/>                 
                                              
                        </li>
                        
                      )
                    })
                    :
                    <p>Brak wyników do wyświetlenia, zmień kryteria wyszukiwania!</p>
                  }
                </ul>
                :
                <p></p>            
          }
        </TodoContainer> 
  )
}

const mapStateToProps = state => ({
    taskList: selectAllTasks(state),
    filteredTasks: selectFilteredTasks(state),
    isLoading: selectIsLoading(state),
    isError: selectIsError(state),
    inputNewTask: selectInputNewTask(state),
    inputSearchTask: selectInputSearchTask(state),
})

const mapDispatchToProps = dispatch => ({
    getTasks: () => dispatch(FETCH_INIT_TASKS()),
    displayAll: () => dispatch(DISPLAY_ALL()),
    displayDone: () => dispatch(DISPLAY_DONE()),
    displayUndone: () => dispatch(DISPLAY_UNDONE()),
    setInputNewTask: (value) => dispatch(INPUT_NEW_TASK(value)),
    setInputSearchTask: (value) => dispatch(INPUT_SEARCH_TASK(value)),
    sendNewTask: (title) => dispatch(ADD_NEW_TASK_TO_LIST(title)),
    changeTaskStatus: (task) => dispatch(CHANGE_TASK_STATUS(task)),
    deleteTask: (task) => dispatch(DELETE_TASK(task)),
});


export default connect (mapStateToProps, mapDispatchToProps)(Todos);