import "../style/arr.css"
import React from 'react';

const Name = ({ handleInput, handleInput2, handleAdd, handleOnKey,handlefordesc }) => {
    return (
        <>
            
            <div >
            <button onClick={handleAdd} className=' btn btn-success  '  >ADD</button>
                <input 
                    type="text" 
                    placeholder="Enter your task" 
                    onChange={handleInput} 
                    onKeyDown={(event)=>handleOnKey(event)} 
                    className='w-30 p-2 descripton '
                    
                />
                 <input 
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
                
                 />
            
                
            </div>
        </>
    );
}

export default Name;
