import React from 'react';
import {useState, useEffect} from 'react';
import '../../App.css';
import ListPosts from './ListPosts';
import NewPost from './NewPost';


const Prediction = () => {
    const [newNames, setNewNames] = useState([]);
    const[ dateVisit, setDateVisit] = useState ("Пророчество : " + new Date().toLocaleString());
    
    useEffect(() => {
      if (localStorage.getItem('info')) {
        const storedList = JSON.parse(localStorage.getItem('info'));
        setNewNames(storedList);
      }
    }, []);

    const deleteAll = () =>{
      setNewNames([]);
      localStorage.removeItem('info');
    };

   
   

    return (
      <div className="App">
        <h1>{dateVisit}</h1>
        <div className="input">
       <NewPost></NewPost>
        </div>
       <div className='buttons'>
        <button onClick={deleteAll} className='buttondeleteAll'>Delet All</button>
       </div>
       <ListPosts/>
      </div>
    )
}

export default Prediction