import React from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { removePredictionsAction } from '../../store/newName';

const ListPosts = () => {

  const dispatch = useDispatch();

const newPostState = useSelector(
  (state) => state.newPosts.newPosts
);

const removeName = (id) =>{
    
    const deletedNames = newPostState.filter((item) => item.id !== id);
    
    localStorage.setItem('info', JSON.stringify(deletedNames));
    dispatch(removePredictionsAction(deletedNames))
}
console.log();
    return (
        <div>
             <ol> {newPostState.map((names) => {
          return (
            <li key={names.id} >{names.name}
              <p>{names.prediction}</p>
              <button type='buttton' onClick={() => removeName(names.id)}>Delete</button>
            </li>
          )
        }
        )}
        </ol>
        </div>
    )
}

export default ListPosts