import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Missions.module.css';
import MissionItem from './MissionItem';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <table
      className={`${styles.table} border border-slate-300 sm:mx-12 mx-0 my-2 mt-12`}
    >
      <thead>
        <tr>
          <th className="border border-slate-300">Mission</th>
          <th className="border border-slate-300">Description</th>
          <th className="border border-slate-300">Status</th>
          <th className="border border-slate-300"> </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionItem key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
