import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission } from '../Redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const joinMissionHandler = () => {
    dispatch(joinMission(mission.mission_id));
  };
  return (
    <tr>
      <td className="border border-slate-300">{mission.mission_name}</td>
      <td className="border border-slate-300 px-2">{mission.description}</td>
      <td className="border border-slate-300 xl:1/12 lg:w-2/12 md:w-2/12 w-3/12 px-1">
        <div className="flex justify-center text-center">
          <span className="py-1 rounded lg:w-7/12 w-100 bg-gray-500 text-white text-sm">
            Not A Member
          </span>
        </div>
      </td>
      <td className="border border-slate-300 xl:1/12 lg:w-2/12 md:w-2/12 w-3/12 text-center">
        <button
          type="button"
          className="hover:bg-gray-400 hover:text-white text-gray-500 border border-gray-500 text-sm py-1 px-3 rounded"
          onClick={joinMissionHandler}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};
MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
