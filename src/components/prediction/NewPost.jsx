import React from "react";
import { useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addPredictionsAction } from "../../store/newName";

const NewPost = () => {
  const predictionsState = useSelector((state) => state.predictions.predictions);
  const newPostState = useSelector(
    (state) => state.newPosts.newPosts
  )
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const randoms = Math.floor(Math.random() * predictionsState.length);

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      prediction: predictionsState[randoms],
    };

    dispatch(addPredictionsAction(newPost));

    localStorage.setItem('info', JSON.stringify([...newPostState, newPost]));
    
    setName("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewPost();
    }
  };

  return (
    <div>
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="NAME"
        />
        <button onClick={addNewPost} onKeyDown={handleKeyPress}>
          add
        </button>
      </form>
    </div>
  );
};

export default NewPost;
