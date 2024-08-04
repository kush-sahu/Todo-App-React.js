import { Form } from "react-router-dom";
import "../style/arr.css"
import React from 'react';

const Name = ({ handleInput, handleInput2, handleAdd, handleOnKey,handlefordesc,myval,myval2 }) => {
    return (
        <>
            
            <form  onSubmit={handleAdd}>
            <button  className=' btn btn-success  '  >ADD</button>
                <input 
                value={myval}
                    type="text" 
                    placeholder="Enter your task" 
                    onChange={handleInput} 
                    onKeyDown={(event)=>handleOnKey(event)} 
                    className='w-30 p-2 descripton '
                    
                />
                 <input 
                 value={myval2}
                className='w-15 p-2'
                    type="date" 
                    onChange={handleInput2} 
                    onKeyDown={(event)=>handleOnKey(event)} 
                />
                <textarea 
                placeholder='Enter your description'
                className='w-15 p-2 h-24'
                type="text" 
                onChange={(event)=>handlefordesc(event)}
                style={{resize:'both'}}
                 />
            
                
            </form>
        </>
    );
}

export default Name;
