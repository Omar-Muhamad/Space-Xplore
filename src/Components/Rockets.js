import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../Redux/APIHelper';
import { toggleReserve } from '../Redux/rockets/rockets';

const Home = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getRockets()), []);

  const handleClick = (e) => {
    dispatch(toggleReserve(e.target.dataset.id));
  };

  const reserveBtnStyle = 'text-sky-500 border-sky-500 hover:bg-sky-500 transition';
  const cancelBtnStyle = 'text-red-500 border-red-500 hover:bg-red-500 transition';
  const reservedBadgeStyle = 'px-2 pb-1 text-sm font-medium rounded-md h-fit text-white bg-red-500';

  return (
    <section className="hero px-24 py-4">
      <ul className="rockets mt-8 grid gap-12">
        {rockets.map((rocket) => (
          <li
            className="rocket p-8 rounded-lg shadow-card transition hover:shadow-card hover:scale-[1.03] border-slate-300 flex gap-10"
            key={rocket.id}
          >
            <div className="rocketImg basis-1/3">
              <img
                className="rounded-lg"
                src={rocket.flickr_images[0]}
                alt={rocket.rocket_name}
              />
            </div>
            <div className="rocketData basis-2/3">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="rocketName text-2xl font-bold">
                  {rocket.rocket_name}
                </h2>
                <span className={rocket.reserved ? reservedBadgeStyle : 'hidden'}>Reserved</span>
              </div>
              <p className="description mb-3 font-medium text-gray-500">
                {rocket.description}
              </p>
              <button
                className={`${
                  rocket.reserved ? cancelBtnStyle : reserveBtnStyle
                } font-medium text-lg px-4 py-2 rounded-md border-[3px] hover:text-white`}
                type="button"
                data-id={rocket.id}
                onClick={handleClick}
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
