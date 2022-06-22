import React , {useEffect} from "react";
import {useDispatch} from 'react-redux';
import  {loadgame} from './actions/gamesaction'

function App() {

  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(loadgame());
  });
  return (
    <div className="App">
      <h1> hello </h1>
      <h2> testing</h2>

    </div>
  );
}

export default App;
