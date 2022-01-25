import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMission } from '../Redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleMissionHandler = () => {
    dispatch(toggleMission(mission.mission_id));
  };

  const joinButtonStyle = 'hover:bg-gray-400 text-gray-500 border-gray-500';
  const leaveButtonStyle = 'hover:bg-red-400 text-red-500 border-red-500';

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
          className={`${
            mission.reserved ? leaveButtonStyle : joinButtonStyle
          } hover:text-white border text-sm py-1 px-3 rounded`}
          onClick={toggleMissionHandler}
        >
          {mission.reserved ? 'Leave Mission' : 'Join Mission'}
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
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MissionItem;
