import getAllMissionsAPI from '../APIHelper';

const GET_ALL_MISSIONS = 'spaceXplore/missions/GET_ALL_MISSIONS';

const initialState = [];

export const getAllMissions = () => async (dispatch) => {
  const missions = await getAllMissionsAPI();
  const missionsForDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch({
    type: GET_ALL_MISSIONS,
    payload: missionsForDispatch,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MISSIONS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
