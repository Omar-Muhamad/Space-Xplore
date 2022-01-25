import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../Redux/APIHelper';

const Home = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRockets()), []);
  return (
    <section className="hero">
      <ul className="rockets">
        {rockets.map((rocket) => (
          <li className="rocket" key={rocket.id}>
            <div className="rocketImg">
              <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
            </div>
            <div className="rocketData">
              <h2 className="rocketName">{rocket.rocket_name}</h2>
              <p className="description">{rocket.description}</p>
              <button type="button" id="reserve">
                Reserve Rocket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
