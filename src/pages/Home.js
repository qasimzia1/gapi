import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadgame } from "../actions/gamesaction";
import Gamescard from "../components/Gamescard";
import gamereducers from "../reducers/games";
//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadgame());
  }, [dispatch]);

  // getting the data from store through use selector

  //const game = useSelector( (store) => store.gamereducer);

  const { upcoming , popular , newgames } = useSelector((store) => store.gamereducer);

  return (
    <Gamelist>
      <h2>UP COMMING  GAMES</h2>

      <Games>
        {upcoming.map((gamereducer) => (
          <Gamescard
            name={gamereducer.name}
            released={gamereducer.released}
            id={gamereducer.id}
            image={gamereducer.background_image}
            key={gamereducer.id}
          />
        ))}
      </Games>


      <h2>POPULAR GAMES</h2>

      <Games>
        {popular.map((gamereducer) => (
          <Gamescard
            name={gamereducer.name}
            released={gamereducer.released}
            id={gamereducer.id}
            image={gamereducer.background_image}
            key={gamereducer.id}
          />
        ))}
      </Games>

      <h2>NEW GAMES</h2>

      <Games>
        {newgames.map((gamereducer) => (
          <Gamescard
            name={gamereducer.name}
            released={gamereducer.released}
            id={gamereducer.id}
            image={gamereducer.background_image}
            key={gamereducer.id}
          />
        ))}
      </Games>
    </Gamelist>
  );
}

const Gamelist = styled(motion.div)`
  //0 top and bottom  5 left and right
  padding: 0rem 2rem;

  h2 {
    padding: 3rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  // means to make colums and auto fit the coloums  minmax means that give each coloum 500 px space and 1fr means if there is not enough space for coloum take rest of the space needed.
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap : 1rem;
  grid-row-gap: 3rem;

`;
export default Home;
