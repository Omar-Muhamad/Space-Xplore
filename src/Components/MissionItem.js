import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleMission } from '../Redux/missions/missions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();

  const toggleMissionHandler = () => {
    dispatch(toggleMission(mission.mission_id));
  };

  const joinButtonStyle = 'text-lime-600 border-lime-600 hover:bg-lime-600 transition';
  const leaveButtonStyle = 'hover:bg-red-400 text-red-500 border-red-500';
  const notAMemberTextStyle = 'bg-gray-500';
  const activeMemberTextStyle = 'bg-sky-500';

  return (
    <tr>
      <td className="border border-slate-300 text-gray-600 font-bold p-4">{mission.mission_name}</td>
      <td className="border border-slate-300 text-gray-600 font-medium p-6 text-left">{mission.description}</td>
      <td className="border border-slate-300 xl:1/12 lg:w-2/12 md:w-2/12 w-3/12 px-1">
        <div className="flex justify-center text-center">
          <span
            className={`${
              mission.reserved ? activeMemberTextStyle : notAMemberTextStyle
            } font-medium text-medium text-white px-2 py-[6px] rounded-md`}
          >
            {!mission.reserved && 'Not A Member'}
            {mission.reserved && 'Active Member'}
          </span>
        </div>
      </td>
      <td className="border border-slate-300 xl:1/12 lg:w-2/12 md:w-2/12 w-3/12 text-center">
        <button
          type="button"
          className={`${
            mission.reserved ? leaveButtonStyle : joinButtonStyle
          } font-medium text-medium px-2 py-1 rounded-md border-2 hover:text-white`}
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
