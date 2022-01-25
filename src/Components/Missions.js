import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMissions } from '../Redux/missions/missions';
import styles from './Missions.module.css';
import MissionItem from './MissionItem';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missions);
  return (
    <table
      className={`${styles.table} border border-slate-300 md:mx-12 mx-0 my-2`}
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