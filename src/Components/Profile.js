import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const filteredMissions = missions.filter((mission) => mission.reserved);
  console.log(filteredMissions);
  return (
    <div className="grid grid-cols-2">
      <div className="px-5">
        <h2 className="font-bold text-2xl px-1 py-2">My Missions</h2>
        <table className="border-collapse border-2 border-slate-300 w-full">
          <tbody>
            {filteredMissions.map((mission) => (
              <tr
                className="border-2 border-slate-300"
                key={mission.mission_id}
              >
                <td className="p-3">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>Hello</div>
    </div>
  );
};

export default Profile;
