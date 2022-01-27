import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const filteredMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="grid grid-cols-2 py-4 px-24">
      <div className="mt-8 mx-8">
        <h2 className="font-bold text-2xl text-center text-white bg-lime-600 py-4 rounded-lg shadow-card">
          My Missions
        </h2>
        {filteredMissions.length === 0 && (
          <p className="text-center font-bold  py-8 rounded-lg shadow-card mt-8 text-lime-600">
            No joined mission found.
          </p>
        )}
        {filteredMissions.length > 0 && (
          <ul className="w-full mt-4">
            {filteredMissions.map((mission) => (
              <li
                className="p-4 text-center font-bold rounded-lg shadow-card mt-6 w-full hover:scale-[1.05] duration-300"
                key={mission.mission_id}
              >
                <h2 className="">{mission.mission_name}</h2>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8 mx-8">
        <h2 className="font-bold text-2xl text-center text-white bg-sky-500 py-4 rounded-lg shadow-card">
          My Rockets
        </h2>
        {reservedRockets.length === 0 && (
          <p className="text-center font-bold py-8 rounded-lg shadow-card mt-8 text-sky-500">
            No Reserved Rockets.
          </p>
        )}
        {reservedRockets.length > 0 && (
          <ul className="w-full mt-4">
            {reservedRockets.map((rocket) => (
              <li
                className="p-4 text-center font-bold rounded-lg shadow-card mt-6 w-full hover:scale-[1.05] duration-300"
                key={rocket.id}
              >
                <h2 className="">{rocket.rocket_name}</h2>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
