




import React, { useState } from "react";
import Name from "./name";
import "../style/arr.css"
import taskData from '../data/tasks.json';

const Arr = () => {
    
    const [myval, setMyval] = useState("");
    const [myval2, setMyval2] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editFood, setEditFood] = useState("");
    const [editDate, setEditDate] = useState("");
    const [search, setSearch] = useState("");
    const [expanded, setExpanded] = useState(null);
    const [arr, setArr] = useState(taskData);
    const [desc,setdesc]=useState("")
    const handleDone = (index) => {
        const updatedArr = arr.map((item, i) => {
            if (i === index) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });
        setArr(updatedArr);
    };

    const handleInput = (event) => {
        setMyval(event.target.value); 
        handleAdd;
    }
    const handleInput2 = (event) => setMyval2(event.target.value);
    const handlefordesc=(event)=>setdesc(event.target.value);

    const handleAdd = () => {
        if (myval !== "" && myval2 !== "") {
            const newItem = { food: myval, date: myval2, description: desc, timestamp: myval2, completed: false };
            setArr([...arr, newItem]);
            // setMyval(""); // Clear input after adding
            // setMyval2(""); // Clear input after adding
            // setdesc("");
        }
    };

    const handleSearchChange = (event) => setSearch(event.target.value);

    const filteredTask = arr.filter(task =>
        task.food.toLowerCase().includes(search.toLowerCase())
    );

    const handleOnKey = (event) => {
        if (event.key === "Enter" && myval && myval2) {
            handleAdd();
            event.target.event='';
        }
    };

    const handleDelete = (index) => {
        const newArr = arr.filter((_, i) => i !== index);
        setArr(newArr);
    };

    const handleEdit = (item, index) => {
        setEditIndex(index);
        setEditFood(item.food);
        setEditDate(item.date);
    };

    const handleSave = () => {
        const updatedArr = arr.map((item, index) => {
            if (index === editIndex) {
                return { ...item, food: editFood, date: editDate };
            }
            return item;
        });
        setArr(updatedArr);
        setEditIndex(null);
        setEditFood("");
        setEditDate("");
    };

    const handleToggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <center className="arrBox">
            <h2>Todo App</h2>
            <input
                type="text"
                placeholder="Search for your task"
                value={search}
                onChange={handleSearchChange}
                className="search"
            />
            <Name
                handleInput={handleInput}
                handleInput2={handleInput2}
                handleAdd={handleAdd}
                handleOnKey={handleOnKey}
                handlefordesc={handlefordesc}
            />
            <div style={{ width: '100vw', paddingTop: '30px', padding: '2%' }}>
                {filteredTask.map((item, index) => (
                    <div key={index}>
                        <div className="arrTodo">
                            <div onClick={() => handleToggleExpand(index)} style={
                                {width:'20%',overflow:'hidden'}
                            }>
                                {item.food}
                            </div>
                            <div >{item.date}</div>
                            <div>
                                <button type="button" className="btn btn-primary" onClick={() => handleEdit(item, index)}>Edit</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                            </div>
                            <div>
                                <button className="btn btn-warning" onClick={() => handleDone(index)}>
                                    {item.completed ? 'Done' : 'Undone'}
                                </button>
                            </div>
                        </div>
                        {expanded === index && (
                            <div className="description">
                                <p><strong>Title:</strong> {item.food}</p>
                                <p><strong>Description:</strong> {item.description}</p>
                                <p><strong>TimeStamp:</strong> {item.timestamp}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {editIndex !== null && (
                <div>
                    <input type="text" value={editFood} onChange={(e) => setEditFood(e.target.value)} />
                    <input type="text" value={editDate} onChange={(e) => setEditDate(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </center>
    );
};

export default Arr;
