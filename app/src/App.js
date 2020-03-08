import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <div style = {{width: '30%', margin: '10px auto'}}> 
                    
            <div> 
                
                <label> enter todo description: </label>
                <input
                    style = {{width: '100%', outlineStyle: 'none'}}
                    placeholder = 'the placeholder text'
                    value = {task}
                    onChange = {handleChange}          
                />
            
                <form  onSubmit = {handleSubmit}>
                    <div> 
                        <div>
                            <button type = 'submit' > Add Todo </button> 
                            <button onClick = {clearTodos}> Clear All Todos</button>                                   
                        </div>
                    </div>
                
                <input
                    style = {{width: '100%', outlineStyle: 'none'}}
                    placeholder = 'the placeholder text'
                    value = {task}
                    onChange = {handleChange}          
                />    

                </form>
            </div>

        </div>


    </div>
  );
}

export default App;
