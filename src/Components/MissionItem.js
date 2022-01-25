import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ mission }) => (
  <tr>
    <td className="border border-slate-300">{mission.mission_name}</td>
    <td className="border border-slate-300 px-2">{mission.description}</td>
    <td className="border border-slate-300"> Hello </td>
    <td className="border border-slate-300"> Hello </td>
  </tr>
);
MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionItem;
